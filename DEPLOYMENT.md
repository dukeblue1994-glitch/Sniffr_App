# Deployment Guide for Sniffr App

This guide covers deploying both the web application and mobile applications to production.

## Table of Contents
- [Environment Setup](#environment-setup)
- [Web Application Deployment](#web-application-deployment)
- [Mobile Application Deployment](#mobile-application-deployment)
- [Payment Integration](#payment-integration)
- [Post-Deployment](#post-deployment)

## Environment Setup

### Web Application (.env.local)

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in the required values:
   - **OpenAI API Key**: Get from https://platform.openai.com/api-keys
   - **NextAuth Secret**: Generate using `openssl rand -base64 32`
   - **Google OAuth**: Set up at https://console.cloud.google.com/
   - **Apple Sign In**: Set up at https://developer.apple.com/
   - **Stripe Keys**: Get from https://dashboard.stripe.com/apikeys

### Mobile Application (.env)

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

3. Fill in the required Firebase values:
   - Get these from your Firebase project console
   - Go to Project Settings > General > Your apps
   - Copy the configuration values

## Web Application Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to Environment Variables
   - Add all variables from .env.local

### Other Platforms

The app can also be deployed to:
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Use the Amplify console
- **Custom VPS**: Use `npm run build && npm start`

## Mobile Application Deployment

### Prerequisites

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```

2. Login to Expo:
   ```bash
   eas login
   ```

3. Configure your project:
   ```bash
   cd mobile
   eas build:configure
   ```

### iOS Deployment

#### Requirements
- Apple Developer Account ($99/year)
- Xcode installed (for local builds)
- App Store Connect app created

#### Steps

1. **Update app.json**:
   - Set `bundleIdentifier` to your unique identifier
   - Update `name` and `slug`

2. **Build for iOS**:
   ```bash
   eas build --platform ios --profile production
   ```

3. **Submit to App Store**:
   ```bash
   eas submit --platform ios
   ```

4. **Configure in App Store Connect**:
   - Add app description, screenshots
   - Set age rating
   - Configure In-App Purchases
   - Submit for review

### Android Deployment

#### Requirements
- Google Play Developer Account ($25 one-time)
- Android Studio (optional, for testing)

#### Steps

1. **Update app.json**:
   - Set `package` to your unique identifier
   - Update `name` and `slug`

2. **Build for Android**:
   ```bash
   eas build --platform android --profile production
   ```

3. **Submit to Google Play**:
   ```bash
   eas submit --platform android
   ```

4. **Configure in Google Play Console**:
   - Add app listing details
   - Upload screenshots
   - Set content rating
   - Configure In-App Products
   - Submit for review

## Payment Integration

### Stripe (Web)

1. **Create a Stripe account**: https://dashboard.stripe.com/register

2. **Create products and prices**:
   - Go to Products in Stripe Dashboard
   - Create "Sniffr Gold Monthly" and "Sniffr Gold Yearly"
   - Copy the Price IDs

3. **Update configuration**:
   - Add Price IDs to `src/lib/stripe-config.ts`
   - Set environment variables in .env.local

4. **Set up webhooks**:
   - Create webhook endpoint in Stripe Dashboard
   - Point to `https://yourdomain.com/api/webhooks/stripe`
   - Copy webhook secret to environment variables

### In-App Purchases (Mobile)

#### iOS (App Store)

1. **App Store Connect**:
   - Go to your app > Features > In-App Purchases
   - Create new subscriptions
   - Add "Sniffr Gold Monthly" and "Sniffr Gold Yearly"
   - Set pricing and availability

2. **Update mobile configuration**:
   - Add product IDs to `mobile/src/lib/payments.ts`

#### Android (Google Play)

1. **Google Play Console**:
   - Go to Monetize > In-app products
   - Create new subscriptions
   - Add "Sniffr Gold Monthly" and "Sniffr Gold Yearly"
   - Set pricing and availability

2. **Update mobile configuration**:
   - Add product IDs to `mobile/src/lib/payments.ts`

### Revenue Cat (Alternative - Recommended)

For easier cross-platform payment management:

1. **Create Revenue Cat account**: https://www.revenuecat.com/

2. **Install SDK**:
   ```bash
   cd mobile
   npm install react-native-purchases
   ```

3. **Configure**:
   - Add your Revenue Cat API keys
   - Set up products in Revenue Cat dashboard
   - Connect to App Store Connect and Google Play

## Post-Deployment

### Monitoring

- Set up error tracking (Sentry, Bugsnag)
- Monitor app performance
- Track analytics (Google Analytics, Mixpanel)

### Updates

#### Web Application
```bash
git push origin main  # Auto-deploys on Vercel
```

#### Mobile Application
```bash
cd mobile
eas build --platform all --profile production
eas submit --platform all
```

### Testing

1. **Web**: Test at your production URL
2. **iOS**: Use TestFlight for beta testing
3. **Android**: Use internal testing track in Google Play

## Troubleshooting

### Common Issues

1. **Build failures**: Check EAS build logs
2. **Environment variables not loading**: Verify .env file exists and is not in .gitignore
3. **Payment issues**: Ensure proper configuration in payment provider dashboard
4. **Deep linking not working**: Check scheme configuration in app.json

### Getting Help

- Expo Documentation: https://docs.expo.dev/
- Next.js Documentation: https://nextjs.org/docs
- Stripe Documentation: https://stripe.com/docs
- Community: GitHub Issues

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review and respond to user feedback
- Monitor crash reports
- Update app store listings
- Refresh promotional materials

### Security

- Rotate API keys periodically
- Keep dependencies updated
- Monitor for security vulnerabilities
- Regular security audits

---

Built by Candience LLC - 2026
