import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function Terms() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Stack.Screen options={{ title: 'Terms of Service' }} />
      <Text className="text-2xl font-bold mb-4">Terms of Service</Text>
      <Text className="text-gray-600 mb-4">
        Last Updated: {new Date().toLocaleDateString()}
      </Text>
      <Text className="text-base mb-4">
        By using the Sniffr application, you agree to these terms. Please read them carefully.
      </Text>
      <Text className="text-xl font-bold mb-2">1. User Conduct</Text>
      <Text className="text-base mb-4">
        Users must be respectful. Harassment or inappropriate content will result in immediate termination of your account.
      </Text>
      <Text className="text-xl font-bold mb-2">2. Subscription Payments</Text>
      <Text className="text-base mb-4">
        Subscriptions are managed via the Apple App Store or Google Play Store. You can cancel at any time through your store settings.
      </Text>
    </ScrollView>
  );
}
