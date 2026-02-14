# Sniffr App

A dog dating application with both web and mobile interfaces. Built with Next.js for web and React Native (Expo) for mobile.

## Project Structure

- **Root**: Next.js web application
- **mobile**: React Native mobile application (iOS/Android)

## Getting Started

### Web Application

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` and add your API keys (see [Configuration](#configuration))

3. Run the development server:
```bash
npm run dev
# or with WebSocket server
npm run dev:all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Mobile Application

1. Navigate to mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your Firebase configuration

4. Start the development server:
```bash
npm start
```

5. Run on device/simulator:
```bash
# iOS
npm run ios

# Android
npm run android

# Web preview
npm run web
```

## Configuration

### Required API Keys

#### Web Application (.env.local)

1. **OpenAI API Key**
   - Get from: https://platform.openai.com/api-keys
   - Used for: AI-powered bio generation and chat features

2. **NextAuth Configuration**
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL`: Your application URL (e.g., http://localhost:3000)

3. **Google OAuth** (Optional - for social login)
   - Get from: https://console.cloud.google.com/
   - Create OAuth 2.0 Client ID
   - Add authorized redirect URIs

4. **Apple Sign In** (Optional - for social login)
   - Get from: https://developer.apple.com/
   - Configure in Apple Developer account

5. **Stripe** (Optional - for payments)
   - Get from: https://dashboard.stripe.com/
   - Required for subscription features

#### Mobile Application (.env)

1. **Firebase Configuration**
   - Get from: https://console.firebase.google.com/
   - Create a new project or use existing
   - Add both iOS and Android apps
   - Copy configuration values from project settings

2. **API URL**
   - Set to your web application URL
   - Local dev: http://localhost:3000
   - Production: Your deployed web app URL

## Features

- **Dog Profiles**: Create and browse dog profiles
- **Matching System**: Swipe to like or pass on potential playdate matches
- **Chat**: Real-time messaging between matched dogs/owners
- **Location-Based**: Find dogs nearby using GPS
- **AI-Powered**: Generate bios and icebreakers with OpenAI
- **Premium Subscriptions**: Unlock additional features with Gold membership

## Tech Stack

### Web
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Tailwind CSS, Lucide Icons
- **Authentication**: NextAuth.js
- **API**: OpenAI GPT-4
- **Payment**: Stripe (configured)

### Mobile
- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **UI**: NativeWind (Tailwind for React Native)
- **State Management**: Zustand
- **Backend**: Firebase
- **Permissions**: Location, Camera, Photo Library

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Web application (Vercel, Netlify, etc.)
- iOS App Store
- Android Google Play
- Payment integration setup

## Development

### Web App Scripts

```bash
npm run dev          # Start Next.js dev server
npm run dev:ws       # Start WebSocket server
npm run dev:all      # Start both servers
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Mobile App Scripts

```bash
npm start            # Start Expo dev server
npm run ios          # Run on iOS simulator
npm run android      # Run on Android emulator
npm run web          # Run in web browser
```

## Project Information

- Built by Candience LLC - KGuess 2026
- Repository: https://github.com/dukeblue1994-glitch/Sniffr_App

## Support

For issues or questions:
1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review Expo documentation: https://docs.expo.dev/
3. Review Next.js documentation: https://nextjs.org/docs
4. Open an issue on GitHub

## License

Private - All rights reserved

