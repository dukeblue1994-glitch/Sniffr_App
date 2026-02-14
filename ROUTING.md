# Routing Guide

This document explains the routing setup for both the web and mobile applications.

## Web Application Routing (Next.js App Router)

The web application uses Next.js 16 with the App Router architecture.

### Route Structure

```
src/app/
├── layout.tsx              # Root layout
├── page.tsx               # Home page (/)
├── api/                   # API routes
│   ├── ai/
│   │   └── route.ts      # POST /api/ai - AI chat endpoint
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts   # NextAuth authentication routes
```

### API Routes

#### AI Endpoint
- **URL**: `/api/ai`
- **Method**: POST
- **Purpose**: Generate AI responses for bios, icebreakers, and chat
- **Configuration**: Requires `OPENAI_API_KEY` in environment

#### Authentication
- **URL**: `/api/auth/*`
- **Methods**: GET, POST
- **Purpose**: Handle OAuth authentication (Google, Apple)
- **Configuration**: Requires NextAuth environment variables

### Adding New Routes

1. **Page Routes**: Create a new folder in `src/app/` with a `page.tsx` file
   ```tsx
   // src/app/profile/page.tsx
   export default function ProfilePage() {
     return <div>Profile</div>
   }
   ```

2. **API Routes**: Create a `route.ts` file in `src/app/api/`
   ```tsx
   // src/app/api/example/route.ts
   export async function GET(request: Request) {
     return Response.json({ message: 'Hello' })
   }
   ```

## Mobile Application Routing (Expo Router)

The mobile application uses Expo Router for file-based navigation.

### Route Structure

```
mobile/app/
├── _layout.tsx            # Root layout with navigation setup
├── (tabs)/                # Tab navigation group
│   ├── _layout.tsx       # Tab layout configuration
│   ├── index.tsx         # Discovery/Home tab (default)
│   ├── chats.tsx         # Chats tab
│   └── two.tsx           # Settings/Profile tab
├── chat/
│   └── [id].tsx          # Individual chat screen
├── modal.tsx             # Modal screen example
└── +not-found.tsx        # 404 error screen
```

### Navigation Types

#### Tab Navigation
The main navigation uses tabs defined in `(tabs)/_layout.tsx`:
- **Home**: Discovery screen for swiping on dog profiles
- **Chats**: List of matches and conversations
- **Profile**: User profile and settings

#### Stack Navigation
Individual screens can be pushed onto the navigation stack:
- Chat detail screens
- Profile edit screens
- Settings screens

### Deep Linking

The app is configured to handle deep links with the scheme `sniffr://`

#### Configuration
In `mobile/app.json`:
```json
{
  "scheme": "sniffr"
}
```

#### Supported Deep Links

- `sniffr://` - Opens to home/discovery
- `sniffr://chat/[id]` - Opens specific chat
- `sniffr://profile` - Opens user profile

#### Universal Links (iOS)

To set up universal links:

1. Add associated domains in `mobile/app.json`:
   ```json
   {
     "ios": {
       "associatedDomains": ["applinks:sniffr.app"]
     }
   }
   ```

2. Host an `apple-app-site-association` file at:
   ```
   https://sniffr.app/.well-known/apple-app-site-association
   ```

#### App Links (Android)

To set up Android app links:

1. Add intent filters in `mobile/app.json`:
   ```json
   {
     "android": {
       "intentFilters": [
         {
           "action": "VIEW",
           "autoVerify": true,
           "data": [
             {
               "scheme": "https",
               "host": "sniffr.app"
             }
           ],
           "category": ["BROWSABLE", "DEFAULT"]
         }
       ]
     }
   }
   ```

2. Host an `assetlinks.json` file at:
   ```
   https://sniffr.app/.well-known/assetlinks.json
   ```

### Adding New Mobile Routes

1. **Tab Screen**: Add a new file in `mobile/app/(tabs)/`
   ```tsx
   // mobile/app/(tabs)/newscreen.tsx
   export default function NewScreen() {
     return <View><Text>New Screen</Text></View>
   }
   ```

2. **Stack Screen**: Add a new file in `mobile/app/`
   ```tsx
   // mobile/app/detail/[id].tsx
   import { useLocalSearchParams } from 'expo-router';
   
   export default function DetailScreen() {
     const { id } = useLocalSearchParams();
     return <View><Text>Detail: {id}</Text></View>
   }
   ```

3. **Modal**: Add a new file with modal presentation
   ```tsx
   // mobile/app/example-modal.tsx
   // Then in _layout.tsx:
   <Stack.Screen name="example-modal" options={{ presentation: 'modal' }} />
   ```

### Navigation Programmatically

```tsx
import { router } from 'expo-router';

// Navigate to a screen
router.push('/chat/123');

// Go back
router.back();

// Replace current screen
router.replace('/home');

// Navigate to a tab
router.push('/(tabs)/chats');
```

## Cross-Platform Routing

### Shared Routes
Both applications should handle these common routes:
- Profile viewing
- Chat conversations
- Match notifications

### API Communication
The mobile app communicates with the web app's API:

```tsx
// mobile/src/config/api.ts
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export async function fetchFromAPI(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  return response.json();
}
```

## Troubleshooting

### Web Application
- **404 on API routes**: Ensure route file is named `route.ts`
- **Page not found**: Check folder structure and `page.tsx` naming
- **Layout not applying**: Verify `layout.tsx` is in correct directory

### Mobile Application
- **Screen not showing**: Check file is in correct folder with correct name
- **Deep link not working**: Verify scheme is configured in app.json
- **Navigation error**: Ensure Expo Router is properly set up in _layout.tsx

## Best Practices

1. **Consistent naming**: Use lowercase with hyphens for route segments
2. **Type safety**: Use TypeScript for all route handlers and components
3. **Error handling**: Always include error boundaries and 404 pages
4. **Deep linking**: Test all deep link scenarios before deployment
5. **API versioning**: Consider versioning API routes (e.g., `/api/v1/`)

## Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Navigation](https://reactnavigation.org/)

---

Built by Candience LLC - 2026
