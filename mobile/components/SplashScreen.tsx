import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { MapPin } from 'lucide-react-native';

export default function SplashScreen() {
  const bounceAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -20,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="flex-1 bg-[#FF6B35] items-center justify-center">
      <Animated.View style={{ transform: [{ translateY: bounceAnim }] }} className="mb-4">
        <MapPin size={80} color="white" fill="white" />
      </Animated.View>
      <Text className="text-white text-5xl font-black tracking-tighter">Sniffr.</Text>
      <Text className="text-white text-lg opacity-90 font-medium mt-2">Find your pack.</Text>
    </SafeAreaView>
  );
}
