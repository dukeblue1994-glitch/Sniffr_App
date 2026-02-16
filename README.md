# Sniffr - Dog Dating App

Sniffr is a dating app for dogs (and their humans), featuring both a web application and mobile app.

## 🚀 Quick Start

**Before you begin**, you need to configure API keys and services. See:
- **[CHECKLIST.md](./CHECKLIST.md)** - Pre-upload checklist and current status
- **[SETUP.md](./SETUP.md)** - Complete setup guide with step-by-step instructions

## Project Structure

- **Web App** (Next.js) - Root directory
- **Mobile App** (React Native/Expo) - `/mobile` directory

## Web App Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

Required credentials:
- `NEXTAUTH_SECRET` - Session encryption key
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` - Google OAuth
- `APPLE_CLIENT_ID`, `APPLE_TEAM_ID`, `APPLE_KEY_ID`, `APPLE_PRIVATE_KEY` - Apple OAuth
- `OPENAI_API_KEY` (optional) - AI features
- **Where to get the keys:** Generate the NextAuth secret locally, create OAuth credentials in Google Cloud Console, create the Apple key in Apple Developer, grab the OpenAI key from the OpenAI Dashboard → API keys, and copy the Firebase values from Firebase Console → Project Settings → Your apps → SDK setup and configuration.

See [SETUP.md](./SETUP.md) for detailed instructions on obtaining these credentials.

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

## Mobile App Setup

### 1. Navigate to Mobile Directory
```bash
cd mobile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Firebase
Edit `mobile/src/lib/firebase.ts` with your Firebase project credentials.

Download Firebase service files:
- `GoogleService-Info.plist` (iOS)
- `google-services.json` (Android)

See [SETUP.md](./SETUP.md) for detailed Firebase setup instructions.

### 4. Run Development
```bash
npm start          # Start Expo dev server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run in web browser
```

### 5. Build for Production
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build
eas build --platform all
```

## Features

- 🔐 Authentication (Google Sign-in, Apple Sign-in)
- 🤖 AI-powered bio generation
- 💬 Chat functionality
- 📱 Cross-platform (Web + Mobile)
- 🔥 Firebase backend (Mobile)
- 🎨 Modern UI with Tailwind CSS

## Documentation

- [SETUP.md](./SETUP.md) - Complete setup and deployment guide
- [CHECKLIST.md](./CHECKLIST.md) - Pre-upload checklist
- [.env.example](./.env.example) - Environment variables template

## Tech Stack

### Web App
- [Next.js 16](https://nextjs.org) - React framework
- [NextAuth.js](https://next-auth.js.org) - Authentication
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [OpenAI API](https://openai.com) - AI features (optional)

### Mobile App
- [React Native](https://reactnative.dev) - Mobile framework
- [Expo](https://expo.dev) - Development platform
- [Firebase](https://firebase.google.com) - Backend services
- [Zustand](https://github.com/pmndrs/zustand) - State management

## Deploy

### Web App
Deploy to [Vercel](https://vercel.com) (recommended), Netlify, or any Node.js hosting platform.

### Mobile App
Submit to Apple App Store and Google Play Store using [EAS Submit](https://docs.expo.dev/submit/introduction/).

See [SETUP.md](./SETUP.md) for detailed deployment instructions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
