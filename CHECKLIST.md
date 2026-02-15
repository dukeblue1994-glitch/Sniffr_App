# Sniffr App - Pre-Upload Checklist

Use this checklist to ensure you have everything configured before uploading/deploying the Sniffr app.

## ✅ Web App (Next.js) - Pre-Deployment Checklist

### Environment Variables (Required)
- [ ] `NEXTAUTH_SECRET` - Generated and added to `.env.local`
- [ ] `GOOGLE_CLIENT_ID` - Obtained from Google Cloud Console
- [ ] `GOOGLE_CLIENT_SECRET` - Obtained from Google Cloud Console
- [ ] `APPLE_CLIENT_ID` - Obtained from Apple Developer Portal
- [ ] `APPLE_TEAM_ID` - Obtained from Apple Developer Portal
- [ ] `APPLE_KEY_ID` - Obtained from Apple Developer Portal
- [ ] `APPLE_PRIVATE_KEY` - Downloaded from Apple Developer Portal (.p8 file)

### Environment Variables (Optional)
- [ ] `OPENAI_API_KEY` - For AI features (falls back to simulated if not set)
- [ ] `WS_PORT` - For DevTools WebSocket (defaults to 3300)

### OAuth Configuration
- [ ] Google OAuth consent screen configured
- [ ] Google OAuth redirect URLs added (development & production)
- [ ] Apple Sign-in Service ID created
- [ ] Apple redirect URLs configured (development & production)
- [ ] Apple private key (.p8) downloaded and content added to env

### Testing
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and app loads at http://localhost:3000
- [ ] Test Google sign-in flow
- [ ] Test Apple sign-in flow
- [ ] Test AI features (if OpenAI key configured)
- [ ] Run `npm run build` successfully
- [ ] Run `npm start` and verify production build works

### Deployment
- [ ] Environment variables added to hosting platform (Vercel/Netlify/etc.)
- [ ] Production domain added to OAuth redirect URLs
- [ ] SSL/HTTPS enabled
- [ ] Test authentication in production environment

---

## 📱 Mobile App (React Native/Expo) - Pre-Upload Checklist

### Firebase Setup (Required)
- [ ] Firebase project created at https://console.firebase.google.com/
- [ ] iOS app registered in Firebase (if deploying to iOS)
- [ ] Android app registered in Firebase (if deploying to Android)
- [ ] Firebase configuration copied to `mobile/src/lib/firebase.ts`
  - [ ] `apiKey` replaced
  - [ ] `authDomain` replaced
  - [ ] `projectId` replaced
  - [ ] `storageBucket` replaced
  - [ ] `messagingSenderId` replaced
  - [ ] `appId` replaced

### Firebase Service Files
- [ ] `GoogleService-Info.plist` downloaded (iOS)
- [ ] `GoogleService-Info.plist` placed in `mobile/` directory
- [ ] `google-services.json` downloaded (Android)
- [ ] `google-services.json` placed in appropriate directory

### Firebase Console Configuration
- [ ] Authentication → Sign-in methods enabled (Email, Google, etc.)
- [ ] Firestore Database created
- [ ] Firestore security rules configured (not public)
- [ ] Storage bucket configured (if using file uploads)

### App Configuration
- [ ] `mobile/app.json` updated:
  - [ ] `name` - App display name
  - [ ] `slug` - URL-friendly name
  - [ ] Bundle identifier/package name configured
- [ ] App icons present in `mobile/assets/images/`
  - [ ] `icon.png`
  - [ ] `splash-icon.png`
  - [ ] `adaptive-icon.png`
  - [ ] `favicon.png`

### Testing
- [ ] Run `cd mobile && npm install` successfully
- [ ] Run `npm start` and Expo dev server starts
- [ ] Test on iOS simulator/device (if targeting iOS)
- [ ] Test on Android emulator/device (if targeting Android)
- [ ] Test Firebase authentication
- [ ] Test app features and navigation
- [ ] Test on actual devices (not just simulators)

### EAS Build Setup (for Production)
- [ ] EAS CLI installed: `npm install -g eas-cli`
- [ ] Logged into Expo account: `eas login`
- [ ] `eas.json` configuration reviewed
- [ ] Expo project configured: `eas build:configure` (if not already done)

### iOS Specific (If deploying to App Store)
- [ ] Apple Developer account active ($99/year)
- [ ] App ID created in Apple Developer Portal
- [ ] Bundle identifier matches in `app.json` and Apple Developer Portal
- [ ] Provisioning profiles generated (EAS handles this automatically)
- [ ] App Store Connect app created
- [ ] App Store Connect metadata prepared:
  - [ ] App description
  - [ ] Screenshots (various device sizes)
  - [ ] Privacy policy URL
  - [ ] Support URL

### Android Specific (If deploying to Play Store)
- [ ] Google Play Developer account active ($25 one-time)
- [ ] Package name matches in `app.json` and Play Console
- [ ] Play Console app created
- [ ] Play Store metadata prepared:
  - [ ] App description
  - [ ] Screenshots (various device sizes)
  - [ ] Privacy policy URL
  - [ ] Target audience/content rating

### Building & Submission
- [ ] Build successful: `eas build --platform ios` (for iOS)
- [ ] Build successful: `eas build --platform android` (for Android)
- [ ] Build tested on actual devices
- [ ] Ready to submit: `eas submit --platform ios` (for iOS)
- [ ] Ready to submit: `eas submit --platform android` (for Android)

---

## 🔒 Security Checklist (Both Apps)

- [ ] No API keys hardcoded in source code
- [ ] All sensitive data in environment variables or secure config
- [ ] `.env` and `.env.local` files in `.gitignore` (already configured)
- [ ] Firebase service files in `.gitignore` or properly secured
- [ ] Firebase security rules restrict public access
- [ ] HTTPS enabled for all production APIs
- [ ] OAuth redirect URLs only include trusted domains
- [ ] Error messages don't expose sensitive information
- [ ] Dependencies up to date (run `npm audit`)

---

## 📋 Current Status Summary

### ✅ Already Configured
- [x] Next.js web app structure
- [x] Expo mobile app structure
- [x] NextAuth integration (code ready)
- [x] Firebase integration (code ready)
- [x] OpenAI integration with fallback (code ready)
- [x] WebSocket server for DevTools
- [x] `.gitignore` files properly configured
- [x] EAS configuration file (`eas.json`)

### ⚠️ Needs Configuration (Before Upload)

#### High Priority - Must Fix
1. **Firebase Configuration** (`mobile/src/lib/firebase.ts`)
   - Currently contains placeholder values: `"YOUR_API_KEY"`, etc.
   - Must replace with actual Firebase project credentials

2. **Environment Variables** (Web App)
   - Create `.env.local` file
   - Add all required OAuth credentials

3. **Firebase Service Files** (Mobile App)
   - Download from Firebase Console
   - Place `GoogleService-Info.plist` and `google-services.json`

#### Medium Priority - Recommended
4. **OpenAI API Key** (Web App)
   - Optional but enhances user experience
   - App works with fallback if not configured

5. **App Identity** (`mobile/app.json`)
   - Update app name, slug, bundle identifier
   - Ensure icons are finalized

---

## 🚀 Quick Start Commands

### Web App
```bash
# Install dependencies
npm install

# Copy environment example
cp .env.example .env.local
# Edit .env.local with your actual credentials

# Run development
npm run dev

# Build for production
npm run build
```

### Mobile App
```bash
# Navigate to mobile directory
cd mobile

# Install dependencies
npm install

# Edit mobile/src/lib/firebase.ts with your Firebase config

# Run development
npm start

# Build for production
eas build --platform all
```

---

## 📞 Need Help?

- **Web App Issues**: Check `SETUP.md` → Web App Setup section
- **Mobile App Issues**: Check `SETUP.md` → Mobile App Setup section
- **Firebase Setup**: See Firebase Documentation at https://firebase.google.com/docs
- **EAS Build**: See Expo Documentation at https://docs.expo.dev/build/introduction/

---

**Note**: Don't skip the security checklist! Exposed API keys can lead to unauthorized usage and charges.

**Last Updated**: February 2026
