# Payment Integration Guide

This guide explains how to set up payment processing for Sniffr App on both web and mobile platforms.

## Overview

- **Web**: Stripe for subscriptions and one-time payments
- **Mobile iOS**: Apple In-App Purchases via App Store
- **Mobile Android**: Google Play Billing
- **Recommended**: RevenueCat for unified cross-platform payment management

## Payment Architecture

```
User Purchase Flow:
1. User initiates purchase in app
2. Payment processed by platform provider (Stripe/Apple/Google)
3. Webhook notifies backend of successful payment
4. Backend verifies payment and grants access
5. User receives premium features
```

## Option 1: Platform-Native Payments

### Web - Stripe Integration

#### 1. Create Stripe Account
- Sign up at https://dashboard.stripe.com/register
- Complete business verification
- Get your API keys from Dashboard > Developers > API keys

#### 2. Install Stripe Dependencies
```bash
npm install @stripe/stripe-js stripe
npm install --save-dev @types/stripe
```

#### 3. Set Environment Variables
Add to `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### 4. Create Products in Stripe
1. Go to Dashboard > Products
2. Create products:
   - **Sniffr Gold Monthly**: $9.99/month
   - **Sniffr Gold Yearly**: $99.99/year
3. Copy the Price IDs

#### 5. Update Configuration
Edit `src/lib/stripe-config.ts` with your Price IDs:
```typescript
export const STRIPE_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
  prices: {
    goldMonthly: 'price_1234567890',  // Your actual Price ID
    goldYearly: 'price_0987654321',   // Your actual Price ID
  }
};
```

#### 6. Create Checkout API Route
```typescript
// src/app/api/checkout/route.ts
import Stripe from 'stripe';
import { NextRequest } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(req: NextRequest) {
  try {
    const { priceId } = await req.json();
    
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return Response.json({ sessionId: session.id });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
```

#### 7. Create Webhook Handler
```typescript
// src/app/api/webhooks/stripe/route.ts
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    return Response.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Grant access to premium features
      await grantPremiumAccess(session.customer);
      break;
    case 'customer.subscription.deleted':
      const subscription = event.data.object;
      // Revoke premium access
      await revokePremiumAccess(subscription.customer);
      break;
    // Add more event types as needed
  }

  return Response.json({ received: true });
}
```

### Mobile - Native In-App Purchases

#### iOS - App Store Connect

1. **Create App in App Store Connect**
   - Go to https://appstoreconnect.apple.com/
   - Click "+" to create new app
   - Fill in app information

2. **Create In-App Purchases**
   - Navigate to your app > Features > In-App Purchases
   - Click "+" to create new subscription
   - Create products:
     - `com.candience.sniffr.gold.monthly` - $9.99/month
     - `com.candience.sniffr.gold.yearly` - $99.99/year
   - Add localized descriptions and pricing

3. **Set Up Subscriptions Group**
   - Create subscription group "Sniffr Gold"
   - Add both subscriptions to the group
   - Configure trial periods if desired

4. **Enable Paid Applications Agreement**
   - Complete tax and banking information
   - Sign the Paid Applications Agreement

#### Android - Google Play Console

1. **Create App in Google Play Console**
   - Go to https://play.google.com/console/
   - Create new application
   - Fill in app details

2. **Set Up Merchant Account**
   - Link a Google Payments merchant account
   - Complete tax information

3. **Create In-App Products**
   - Go to Monetize > In-app products
   - Create subscriptions:
     - `com.candience.sniffr.gold.monthly` - $9.99/month
     - `com.candience.sniffr.gold.yearly` - $99.99/year
   - Set pricing and billing period
   - Activate products

4. **Configure Subscription Details**
   - Add base plans
   - Set up grace periods and account holds
   - Configure proration if needed

## Option 2: RevenueCat (Recommended)

RevenueCat simplifies cross-platform payment management and provides a unified API.

### Benefits
- Single API for iOS, Android, and Web
- Built-in receipt validation
- Cross-platform subscription management
- Analytics and charts
- Webhooks for backend integration
- A/B testing for pricing

### Setup

#### 1. Create RevenueCat Account
- Sign up at https://www.revenuecat.com/
- Create a new project

#### 2. Install SDK

##### Mobile
```bash
cd mobile
npm install react-native-purchases
```

##### Web
```bash
npm install @revenuecat/purchases-js
```

#### 3. Configure Apps in RevenueCat

1. **iOS Configuration**
   - Go to Project Settings > Apps
   - Add iOS app
   - Enter bundle ID: `com.candience.sniffr`
   - Connect to App Store Connect
   - Upload In-App Purchase Key (.p8 file)

2. **Android Configuration**
   - Add Android app
   - Enter package name: `com.candience.sniffr`
   - Upload Google Play service account JSON
   - Link to Google Play

3. **Create Entitlements**
   - Go to Entitlements
   - Create "gold" entitlement
   - Attach products to entitlement

4. **Create Offerings**
   - Go to Offerings
   - Create "default" offering
   - Add packages (monthly, yearly)

#### 4. Implement in Mobile App

```typescript
// mobile/src/lib/revenuecat.ts
import Purchases from 'react-native-purchases';

const REVENUECAT_API_KEY = {
  ios: 'YOUR_IOS_API_KEY',
  android: 'YOUR_ANDROID_API_KEY',
};

export const initializeRevenueCat = async () => {
  const apiKey = Platform.OS === 'ios' 
    ? REVENUECAT_API_KEY.ios 
    : REVENUECAT_API_KEY.android;
  
  Purchases.configure({ apiKey });
};

export const purchasePackage = async (packageToBuy: any) => {
  try {
    const { customerInfo } = await Purchases.purchasePackage(packageToBuy);
    
    if (customerInfo.entitlements.active['gold']) {
      // User has gold subscription
      return { success: true };
    }
  } catch (e: any) {
    if (!e.userCancelled) {
      // Error occurred
      return { success: false, error: e.message };
    }
  }
  
  return { success: false };
};

export const checkSubscription = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo.entitlements.active['gold'] !== undefined;
  } catch (e) {
    return false;
  }
};

export const restorePurchases = async () => {
  try {
    const customerInfo = await Purchases.restorePurchases();
    return customerInfo.entitlements.active['gold'] !== undefined;
  } catch (e) {
    return false;
  }
};
```

#### 5. Use in Components

```tsx
// mobile/app/(tabs)/profile.tsx
import { useState, useEffect } from 'react';
import { purchasePackage, checkSubscription } from '@/lib/revenuecat';

export default function ProfileScreen() {
  const [isGold, setIsGold] = useState(false);

  useEffect(() => {
    checkSubscription().then(setIsGold);
  }, []);

  const handleUpgrade = async () => {
    const offerings = await Purchases.getOfferings();
    const monthlyPackage = offerings.current?.monthly;
    
    if (monthlyPackage) {
      const result = await purchasePackage(monthlyPackage);
      if (result.success) {
        setIsGold(true);
      }
    }
  };

  return (
    // Your component JSX
  );
}
```

## Backend Integration

### User Premium Status

Create a database schema to track premium users:

```sql
CREATE TABLE premium_users (
  user_id VARCHAR(255) PRIMARY KEY,
  subscription_type VARCHAR(50),
  subscription_status VARCHAR(50),
  expires_at TIMESTAMP,
  platform VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Webhook Handlers

#### RevenueCat Webhook
```typescript
// src/app/api/webhooks/revenuecat/route.ts
export async function POST(req: Request) {
  const event = await req.json();
  
  switch (event.type) {
    case 'INITIAL_PURCHASE':
    case 'RENEWAL':
      // Grant premium access
      await updateUserPremiumStatus(
        event.app_user_id,
        'active',
        event.expiration_at_ms
      );
      break;
      
    case 'CANCELLATION':
    case 'EXPIRATION':
      // Schedule premium access removal
      await scheduleAccessRemoval(
        event.app_user_id,
        event.expiration_at_ms
      );
      break;
      
    case 'PRODUCT_CHANGE':
      // Update subscription tier
      await updateSubscriptionTier(
        event.app_user_id,
        event.new_product_id
      );
      break;
  }
  
  return Response.json({ received: true });
}
```

## Testing

### Stripe Testing
1. Use test API keys (pk_test_, sk_test_)
2. Use test card numbers:
   - Success: 4242 4242 4242 4242
   - Decline: 4000 0000 0000 0002
3. Use Stripe CLI to test webhooks locally

### iOS Testing
1. Use Sandbox tester accounts
2. Create in App Store Connect > Users and Access > Sandbox Testers
3. Sign out of App Store on device
4. Use sandbox account when prompted

### Android Testing
1. Use test credit card in Google Play
2. Add license test accounts in Google Play Console
3. Use test accounts to make purchases

## Security Considerations

1. **Never trust the client**: Always verify purchases on your backend
2. **Secure API keys**: Use environment variables, never commit keys
3. **Validate receipts**: Verify all purchases with Apple/Google/Stripe
4. **Use webhooks**: Don't rely on client-side purchase confirmation
5. **Implement fraud detection**: Monitor for suspicious activity

## Compliance

### App Store Review Guidelines
- Clearly disclose subscription terms
- Provide easy cancellation
- Use Apple's in-app purchase system for digital goods
- Include "Restore Purchases" button

### Google Play Policies
- Clearly state pricing and billing terms
- Use Google Play Billing for digital content
- Provide access to subscription management
- Honor cancellations immediately

### Legal Requirements
- Privacy policy must mention payment processing
- Terms of service must cover subscriptions
- GDPR compliance for EU users
- PCI compliance for credit card handling

## Troubleshooting

### Common Issues

1. **Purchases not working in development**
   - iOS: Use sandbox tester account
   - Android: Add test account to license testers

2. **Receipt validation fails**
   - Check API keys are correct
   - Verify webhook endpoints are accessible
   - Check server time is synchronized

3. **Subscription not recognized**
   - Verify product IDs match exactly
   - Check entitlement configuration
   - Review webhook logs

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Apple In-App Purchase](https://developer.apple.com/in-app-purchase/)
- [Google Play Billing](https://developer.android.com/google/play/billing)
- [RevenueCat Documentation](https://www.revenuecat.com/docs)

---

Built by Candience LLC - 2026
