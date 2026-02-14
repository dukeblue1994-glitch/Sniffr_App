# Quick Start Guide

Get Sniffr App up and running in minutes!

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**
- **iOS development**: macOS with Xcode
- **Android development**: Android Studio

## 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/dukeblue1994-glitch/Sniffr_App.git
cd Sniffr_App

# Run the setup script (optional but recommended)
./scripts/setup.sh

# Or manually:
# Copy environment files
cp .env.local.example .env.local
cd mobile && cp .env.example .env && cd ..

# Install dependencies
npm install
cd mobile && npm install && cd ..
```

## 2. Configure Environment Variables

### Web App (.env.local)

Edit `.env.local` and add at minimum:

```bash
# Required for basic functionality
NEXTAUTH_SECRET=$(openssl rand -base64 32)
NEXTAUTH_URL=http://localhost:3000

# Optional: For AI features
OPENAI_API_KEY=your_key_here
```

### Mobile App (mobile/.env)

Edit `mobile/.env` and add your Firebase config:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase values
```

**Get Firebase config:**
1. Go to https://console.firebase.google.com/
2. Create project or select existing
3. Add apps (iOS + Android)
4. Copy config from project settings

## 3. Run Development Servers

### Web Application

```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2 (optional): Start WebSocket server
npm run dev:ws

# Or run both together:
npm run dev:all
```

Open http://localhost:3000

### Mobile Application

```bash
cd mobile
npm start
```

Then choose:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser
- Scan QR code with Expo Go app on your phone

## 4. Test Basic Features

### Web App
1. Open http://localhost:3000
2. You should see the dog profile swipe interface
3. Try swiping left/right on profiles
4. Check the matches section

### Mobile App
1. Once the app loads, you'll see the discovery tab
2. Swipe on dog profiles
3. Navigate between tabs (Home, Chats, Profile)

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Expo/Metro Bundler Issues
```bash
cd mobile
# Clear cache
npx expo start -c

# Or reset
rm -rf node_modules .expo
npm install
```

### Firebase Not Working
- Verify all Firebase config values are correct
- Check Firebase project has Authentication enabled
- Ensure Firestore database is created

### Module Not Found Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install

# For mobile
cd mobile
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

Once you have the basic app running:

1. **Configure Payment** - See [PAYMENT.md](./PAYMENT.md)
2. **Set Up Deployment** - See [DEPLOYMENT.md](./DEPLOYMENT.md)
3. **Understand Routing** - See [ROUTING.md](./ROUTING.md)
4. **Read Full Documentation** - See [README.md](./README.md)

## Development Workflow

```bash
# Start web dev server
npm run dev

# Start mobile dev server
cd mobile && npm start

# Run linter
npm run lint

# Build for production
npm run build
```

## Common Commands

### Web App
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Lint code
```

### Mobile App
```bash
npm start            # Start Expo dev server
npm run ios          # Open iOS simulator
npm run android      # Open Android emulator
npm run web          # Open in web browser
```

## Getting API Keys

### OpenAI (for AI features)
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API keys
4. Create new secret key
5. Add to `.env.local` as `OPENAI_API_KEY`

### Firebase (for mobile backend)
1. Go to https://console.firebase.google.com/
2. Create new project
3. Add iOS app (bundle ID: `com.candience.sniffr`)
4. Add Android app (package: `com.candience.sniffr`)
5. Copy config to `mobile/.env`

### Stripe (for payments)
1. Go to https://dashboard.stripe.com/
2. Sign up or log in
3. Get test keys from Developers > API keys
4. Add to `.env.local`

## Support

- 📖 Read the full [README.md](./README.md)
- 🚀 See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
- 💳 See [PAYMENT.md](./PAYMENT.md) for payment setup
- 🗺️ See [ROUTING.md](./ROUTING.md) for routing info
- 🐛 Report issues on GitHub

---

Built by Candience LLC - 2026
