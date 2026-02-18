# Sniffr App - Setup Guide

This guide will help you configure all necessary API keys and services to run and deploy the Sniffr app.

## Overview

Sniffr is a dog dating app with two components:
1. **Web App** (Next.js) - Located in the root directory
2. **Mobile App** (React Native/Expo) - Located in `/mobile` directory

---

## Web App Setup (Next.js)

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Place `.env.local` in the project root (same folder as `package.json`). The web UI component at `src/components/SniffrApp.tsx` is a client component—keep the top-of-file directive exactly as `"use client";` so the interactive UI works.

### 3. Required API Keys & Configuration

#### NextAuth Secret (REQUIRED)
Generate a random secret for NextAuth session encryption:

```bash
openssl rand -base64 32
```

Add to `.env.local`:
```
NEXTAUTH_SECRET=<your-generated-secret>
```

#### Google OAuth (REQUIRED for Google Sign-in)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Set authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
7. Copy Client ID and Client Secret

Add to `.env.local`:
```
GOOGLE_CLIENT_ID=<your-client-id>
GOOGLE_CLIENT_SECRET=<your-client-secret>
```

#### Apple OAuth (REQUIRED for Apple Sign-in)

1. Go to [Apple Developer Account](https://developer.apple.com/account/)
2. Create an App ID if you haven't
3. Create a Service ID for "Sign in with Apple"
4. Configure redirect URLs:
   - Development: `http://localhost:3000/api/auth/callback/apple`
   - Production: `https://yourdomain.com/api/auth/callback/apple`
5. Create a Key for "Sign in with Apple"
6. Download the private key (.p8 file)

Add to `.env.local`:
```
APPLE_CLIENT_ID=<your-service-id>
APPLE_TEAM_ID=<your-team-id>
APPLE_KEY_ID=<your-key-id>
APPLE_PRIVATE_KEY=<content-of-your-p8-file>
```

**Note:** For APPLE_PRIVATE_KEY, you can either:
- Paste the entire key content (including BEGIN/END lines)
- Or store it as a base64 encoded string

#### OpenAI API (OPTIONAL)

The app can generate AI-powered bios, icebreakers, and playdate suggestions.

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account and add payment method
3. Go to API Keys section
4. Create a new secret key

Add to `.env.local`:
```
OPENAI_API_KEY=<your-openai-api-key>
```

**Note:** If not provided, the app falls back to simulated responses (see `/src/app/api/ai/route.ts`)

### 4. Run Development Server

```bash
# Run Next.js only
npm run dev

# Run Next.js + WebSocket server (for DevTools)
npm run dev:all
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

---

## Mobile App Setup (React Native/Expo)

### Prerequisites
- Node.js 20+ installed
- Expo CLI installed: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Studio (for Android development)

### 1. Navigate to Mobile Directory

```bash
cd mobile
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase (REQUIRED)

The mobile app uses Firebase for authentication and data storage.

#### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add an iOS app and/or Android app
4. Download configuration files:
   - **iOS**: `GoogleService-Info.plist`
   - **Android**: `google-services.json`

#### Update Firebase Configuration

Edit `mobile/src/lib/firebase.ts` and replace placeholder values:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                    // From Firebase Console
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

**To find these values:**
1. Go to Firebase Console → Project Settings
2. Scroll down to "Your apps"
3. Select your app
4. Copy the configuration values

#### Place Service Configuration Files

- **For iOS**: Place `GoogleService-Info.plist` in `mobile/` directory
- **For Android**: Place `google-services.json` in `mobile/android/app/` directory (if the directory exists)

### 4. Configure Expo App

Edit `mobile/app.json` to customize:
- `name`: Your app name
- `slug`: Your app slug (URL-friendly name)
- `bundleIdentifier` (iOS): e.g., `com.yourcompany.sniffr`
- `package` (Android): e.g., `com.yourcompany.sniffr`

### 5. Run Development

```bash
# Start Expo dev server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

### 6. Build for Production

#### Using EAS Build (Recommended)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure EAS:
```bash
eas build:configure
```

4. Build for platforms:
```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both
eas build --platform all
```

---

## Deployment

### Web App Deployment

#### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy

#### Other Platforms
- Netlify
- AWS Amplify
- Docker container

### Mobile App Deployment

#### iOS App Store

1. Build with EAS: `eas build --platform ios`
2. Download the `.ipa` file
3. Submit to App Store Connect using Transporter or EAS Submit:
   ```bash
   eas submit --platform ios
   ```

#### Google Play Store

1. Build with EAS: `eas build --platform android`
2. Download the `.aab` file
3. Submit to Google Play Console or use EAS Submit:
   ```bash
   eas submit --platform android
   ```

---

## Security Checklist

Before uploading/deploying, ensure:

- [ ] All API keys are stored in environment variables (NOT in code)
- [ ] `.env` files are in `.gitignore` (already configured)
- [ ] NextAuth secret is strong and unique
- [ ] OAuth redirect URLs are properly configured for your domain
- [ ] Firebase security rules are configured (not public)
- [ ] HTTPS is enabled in production
- [ ] Review Firebase Console → Authentication → Sign-in methods
- [ ] Test authentication flows in production environment

---

## Current Issues to Fix

### ⚠️ Firebase Configuration
The file `mobile/src/lib/firebase.ts` contains placeholder values:
```typescript
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
// etc...
```

**Action Required:** Replace these with your actual Firebase project credentials.

### ⚠️ Missing Service Files
Firebase service configuration files are not present:
- `google-services.json` (Android)
- `GoogleService-Info.plist` (iOS)

**Action Required:** Download from Firebase Console and place in appropriate directories.

---

## Optional Configurations

### WebSocket Server
The DevTools feature uses a WebSocket server for log streaming. Configure the port:

```
WS_PORT=3300  # Default port
```

Run with: `npm run dev:ws` or `npm run dev:all`

---

## Testing the Setup

### Web App
1. Start the server: `npm run dev`
2. Open http://localhost:3000
3. Try signing in with Google/Apple
4. Test AI features (if OpenAI key is configured)

### Mobile App
1. Start Expo: `cd mobile && npm start`
2. Scan QR code with Expo Go app
3. Test authentication
4. Verify Firebase connection

---

## Troubleshooting

### Authentication Issues
- Verify OAuth redirect URLs match exactly
- Check that OAuth consent screen is configured
- Ensure credentials are not expired

### Firebase Issues
- Verify Firebase project is active
- Check that authentication methods are enabled in Firebase Console
- Review Firebase security rules

### Build Issues
- Clear cache: `npm run build` (web) or `expo start -c` (mobile)
- Delete `node_modules` and reinstall
- Check Node.js version compatibility

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)

---

## Summary of Required Credentials

### Must Have (Web App)
✅ NEXTAUTH_SECRET
✅ GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET
✅ APPLE_CLIENT_ID + APPLE_TEAM_ID + APPLE_KEY_ID + APPLE_PRIVATE_KEY

### Must Have (Mobile App)
✅ Firebase Project Configuration (apiKey, authDomain, projectId, etc.)
✅ Firebase Service Files (google-services.json, GoogleService-Info.plist)

### Optional
- OPENAI_API_KEY (enables AI features, otherwise uses fallback)
- WS_PORT (for DevTools, defaults to 3300)

---

**Last Updated:** February 2026
