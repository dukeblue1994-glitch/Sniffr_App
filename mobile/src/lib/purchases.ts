import Purchases from 'react-native-purchases';
import { Platform } from 'react-native';

const API_KEYS = {
  apple: 'goog_placeholder_apple_api_key', // Replace with Apple Public API Key
  google: 'goog_placeholder_google_api_key', // Replace with Google Public API Key
};

export const initPurchases = async () => {
  if (Platform.OS === 'ios') {
    await Purchases.configure({ apiKey: API_KEYS.apple });
  } else if (Platform.OS === 'android') {
    await Purchases.configure({ apiKey: API_KEYS.google });
  }
};

export const getCustomerInfo = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo;
  } catch (e) {
    console.error('Error fetching customer info:', e);
    return null;
  }
};

export const hasPremium = (customerInfo: any) => {
  // Replace 'premium' with your actual entitlement ID from RevenueCat dashboard
  return customerInfo?.entitlements.active['premium'] !== undefined;
};
