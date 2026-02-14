import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

export default function PrivacyPolicy() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Stack.Screen options={{ title: 'Privacy Policy' }} />
      <Text className="text-2xl font-bold mb-4">Privacy Policy</Text>
      <Text className="text-gray-600 mb-4">
        Last Updated: {new Date().toLocaleDateString()}
      </Text>
      <Text className="text-base mb-4">
        Sniffr ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Sniffr.
      </Text>
      <Text className="text-xl font-bold mb-2">1. Information We Collect</Text>
      <Text className="text-base mb-4">
        We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with other users.
      </Text>
      {/* Add more placeholder sections as needed for App Store review */}
    </ScrollView>
  );
}
