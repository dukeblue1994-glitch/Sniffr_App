# API Keys and Configuration Reference

This document provides a complete reference for all API keys and configuration needed for Sniffr App.

## Quick Reference

| Service | Required For | Environment File | Get Keys From |
|---------|-------------|------------------|---------------|
| OpenAI | AI features (web) | `.env.local` | https://platform.openai.com/api-keys |
| NextAuth | Authentication (web) | `.env.local` | Generate with `openssl rand -base64 32` |
| Google OAuth | Social login (web) | `.env.local` | https://console.cloud.google.com/ |
| Apple Sign In | Social login (web/mobile) | `.env.local` | https://developer.apple.com/ |
| Firebase | Backend (mobile) | `mobile/.env` | https://console.firebase.google.com/ |
| Stripe | Payments (web) | `.env.local` | https://dashboard.stripe.com/ |

## Web Application (.env.local)

### OpenAI API Key

**Purpose**: Powers AI-generated bios, icebreakers, and chat features

**How to get**:
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API keys section
4. Click "Create new secret key"
5. Copy the key (starts with `sk-`)

**Configuration**:
```bash
OPENAI_API_KEY=sk-proj-...your-key-here...
```

**Cost**: Pay per usage (GPT-4 is ~$0.03/1K tokens)

**Optional**: Yes - app will use simulated responses if not provided

---

### NextAuth Secret

**Purpose**: Encrypts session tokens and cookies

**How to get**:
```bash
openssl rand -base64 32
```

**Configuration**:
```bash
NEXTAUTH_SECRET=your_random_32_character_string_here
```

**Cost**: Free

**Optional**: No - required for authentication

---

### NextAuth URL

**Purpose**: Tells NextAuth where your app is hosted

**Configuration**:
```bash
# Development
NEXTAUTH_URL=http://localhost:3000

# Production
NEXTAUTH_URL=https://yourdomain.com
```

**Cost**: Free

**Optional**: No - required for authentication

---

### Google OAuth Credentials

**Purpose**: Enables "Sign in with Google"

**How to get**:
1. Go to https://console.cloud.google.com/
2. Create a new project or select existing
3. Enable "Google+ API"
4. Go to Credentials > Create Credentials > OAuth 2.0 Client ID
5. Application type: Web application
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
7. Copy Client ID and Client Secret

**Configuration**:
```bash
GOOGLE_CLIENT_ID=123456789-abcdefg.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-...your-secret...
```

**Cost**: Free

**Optional**: Yes - but recommended for better UX

---

### Apple Sign In Credentials

**Purpose**: Enables "Sign in with Apple"

**How to get**:
1. Join Apple Developer Program ($99/year)
2. Go to https://developer.apple.com/account/resources/identifiers/list
3. Create a Service ID
4. Configure Sign in with Apple
5. Add return URLs (same as Google OAuth)
6. Create a Private Key
7. Note your Team ID, Key ID, and Client ID

**Configuration**:
```bash
APPLE_CLIENT_ID=com.candience.sniffr.auth
APPLE_TEAM_ID=ABC123DEFG
APPLE_KEY_ID=XYZ987HIJK
APPLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
```

**Cost**: $99/year (Apple Developer Program)

**Optional**: Yes - but required for iOS App Store (if you use authentication)

---

### Stripe API Keys

**Purpose**: Process payments and subscriptions

**How to get**:
1. Go to https://dashboard.stripe.com/register
2. Complete account setup
3. Go to Developers > API keys
4. Use test keys for development
5. Use live keys for production

**Configuration**:
```bash
# For client-side (public)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...your-key...

# For server-side (secret)
STRIPE_SECRET_KEY=sk_test_...your-key...

# For webhooks
STRIPE_WEBHOOK_SECRET=whsec_...your-secret...
```

**Webhook Setup**:
1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
4. Copy webhook signing secret

**Cost**: 2.9% + 30¢ per transaction

**Optional**: Yes - but required for monetization

---

## Mobile Application (mobile/.env)

### Firebase Configuration

**Purpose**: Backend services (authentication, database, storage)

**How to get**:
1. Go to https://console.firebase.google.com/
2. Click "Create a project" or select existing
3. Add apps:
   - Click iOS app icon
   - Bundle ID: `com.candience.sniffr`
   - Download `GoogleService-Info.plist` (optional)
   - Click Android app icon
   - Package name: `com.candience.sniffr`
   - Download `google-services.json` (optional)
4. Go to Project Settings > General
5. Scroll to "Your apps"
6. Copy the configuration values

**Configuration**:
```bash
EXPO_PUBLIC_FIREBASE_API_KEY=AIzaSyA...your-key...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
EXPO_PUBLIC_FIREBASE_APP_ID=1:123456789012:ios:abcdef123456
```

**Setup Required**:
1. Enable Authentication:
   - Go to Build > Authentication
   - Click "Get Started"
   - Enable sign-in methods you want (Email/Password, Google, etc.)

2. Create Firestore Database:
   - Go to Build > Firestore Database
   - Click "Create database"
   - Start in test mode (change rules later)

3. Enable Storage (if needed):
   - Go to Build > Storage
   - Click "Get started"
   - Use default security rules

**Cost**: 
- Spark Plan (Free): 50K reads/day, 20K writes/day
- Blaze Plan (Pay as you go): $0.06/100K reads, $0.18/100K writes

**Optional**: No - required for mobile app functionality

---

### API URL

**Purpose**: Points mobile app to your web API

**Configuration**:
```bash
# Development (local)
EXPO_PUBLIC_API_URL=http://localhost:3000

# Development (network)
EXPO_PUBLIC_API_URL=http://192.168.1.x:3000

# Production
EXPO_PUBLIC_API_URL=https://api.yourdomain.com
```

**Note**: For iOS simulator, use `localhost`. For Android emulator, use `10.0.2.2`. For physical devices, use your computer's local IP.

**Cost**: Free

**Optional**: No - required to connect mobile to backend

---

## In-App Purchase Setup

### iOS (App Store Connect)

**Purpose**: Accept payments in iOS app

**Prerequisites**: 
- Apple Developer Account ($99/year)
- App created in App Store Connect

**Setup**:
1. Go to https://appstoreconnect.apple.com/
2. Select your app
3. Go to Features > In-App Purchases
4. Click "+" to create new subscription
5. Create products:
   - Product ID: `com.candience.sniffr.gold.monthly`
   - Reference Name: "Sniffr Gold Monthly"
   - Subscription Duration: 1 month
   - Price: $9.99
6. Repeat for yearly subscription

**Testing**:
1. Go to Users and Access > Sandbox Testers
2. Add test accounts
3. Use these accounts to test purchases

**Cost**: $99/year + 15-30% App Store commission

**Optional**: Yes - but required for iOS monetization

---

### Android (Google Play Console)

**Purpose**: Accept payments in Android app

**Prerequisites**:
- Google Play Developer Account ($25 one-time)
- App created in Google Play Console

**Setup**:
1. Go to https://play.google.com/console/
2. Select your app
3. Go to Monetize > In-app products
4. Create subscriptions:
   - Product ID: `com.candience.sniffr.gold.monthly`
   - Name: "Sniffr Gold Monthly"
   - Billing period: 1 month
   - Price: $9.99
5. Repeat for yearly subscription

**Testing**:
1. Go to Setup > License testing
2. Add test Google accounts
3. Use these accounts to test purchases

**Cost**: $25 one-time + 15-30% Play Store commission

**Optional**: Yes - but required for Android monetization

---

## RevenueCat (Optional but Recommended)

**Purpose**: Unified cross-platform payment management

**How to get**:
1. Go to https://www.revenuecat.com/
2. Sign up for free account
3. Create a project
4. Connect to App Store Connect and Google Play

**Setup**:
1. Add iOS app with bundle ID
2. Upload App Store Connect API key (.p8 file)
3. Add Android app with package name
4. Upload Google Play service account JSON
5. Configure entitlements and offerings

**Configuration**:
```bash
# In your code
const REVENUECAT_API_KEY = {
  ios: 'appl_...',
  android: 'goog_...',
};
```

**Cost**: 
- Free: Up to $10K monthly tracked revenue
- Paid: 1% of revenue after free tier

**Optional**: Yes - but simplifies payment management

---

## Security Best Practices

1. **Never commit API keys to Git**
   - Always use `.env` files
   - Add `.env*` to `.gitignore` (except `.example` files)

2. **Use different keys for development and production**
   - Test keys for development
   - Live keys only on production servers

3. **Rotate keys periodically**
   - Change keys every 3-6 months
   - Immediately rotate if compromised

4. **Limit API key permissions**
   - Use read-only keys where possible
   - Enable IP restrictions when available

5. **Monitor API usage**
   - Set up billing alerts
   - Watch for unusual activity
   - Review access logs regularly

6. **Store keys securely**
   - Use environment variables
   - Never hardcode in source
   - Use secrets management (Vercel, AWS Secrets Manager, etc.)

---

## Troubleshooting

### "API key not found" error
- Verify `.env.local` or `mobile/.env` exists
- Check key names match exactly
- Restart dev server after adding keys

### Firebase configuration error
- Verify all fields are filled
- Check for extra spaces or quotes
- Ensure Firebase project has Authentication enabled

### Payment not working
- Verify using test API keys
- Check product IDs match exactly
- Ensure webhooks are configured
- Test in sandbox/test mode first

### OAuth redirect error
- Check redirect URLs match exactly
- Include both http (dev) and https (prod) URLs
- Verify OAuth credentials are for correct environment

---

## Getting Help

- See [README.md](./README.md) for general setup
- See [QUICKSTART.md](./QUICKSTART.md) for quick setup
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
- See [PAYMENT.md](./PAYMENT.md) for payment details

---

Built by Candience LLC - 2026
