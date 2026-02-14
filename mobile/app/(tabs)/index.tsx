import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, SafeAreaView } from 'react-native';
import { MapPin, Activity, ShieldCheck, RotateCcw, X, Star, Heart, MessageCircle, Bone } from 'lucide-react-native';
import { useStore } from '../../src/store/useStore';
import { MOCK_DOGS } from '../../src/data/mockData';
import * as Location from 'expo-location';

export default function DiscoveryScreen() {
  const { 
    currentDogIndex, 
    handleSwipe, 
    isGold, 
    setIsGold, 
    justMatched, 
    setJustMatched,
    setActiveChat
  } = useStore();

  const [locationStatus, setLocationStatus] = useState('Fetching...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationStatus('Permission denied');
        return;
      }
      setLocationStatus('Nearby');
    })();
  }, []);

  const dog = MOCK_DOGS[currentDogIndex];

  const onSwipe = (direction: 'left' | 'right') => {
    handleSwipe(direction, MOCK_DOGS);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-2">
        <View className="flex-row items-center">
          <MapPin size={18} color="#FF6B35" />
          <Text className="ml-1 font-bold text-sm text-[#FF6B35]">
            {locationStatus} ({dog.distance})
          </Text>
        </View>
        <TouchableOpacity className="bg-orange-50 px-3 py-1 rounded-full flex-row items-center">
          <Text className="text-[#FF6B35] text-xs font-bold mr-1">Filters</Text>
          <Activity size={12} color="#FF6B35" />
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View className="flex-1 px-4 py-2">
        <View className="flex-1 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <View className="h-3/5 relative">
            <Image
              source={{ uri: dog.image }}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/30" />
            <View className="absolute bottom-4 left-4">
              <View className="flex-row items-end flex-wrap">
                <Text className="text-white text-4xl font-bold">{dog.name}</Text>
                <Text className="text-white text-xl font-medium mb-1 ml-2">
                  & {dog.owner.name} ({dog.owner.age})
                </Text>
              </View>
              <View className="flex-row items-center mt-1">
                <ShieldCheck size={16} color="#6BC453" />
                <Text className="ml-1 font-semibold text-[#6BC453] text-sm">
                  Verified Vax
                </Text>
                <Text className="text-white mx-2">•</Text>
                <Text className="text-white text-sm opacity-90">{dog.breed}</Text>
              </View>
            </View>
          </View>

          <View className="p-5 flex-1 justify-between bg-[#F7F5F2]">
            <View>
              <View className="flex-row flex-wrap mb-3">
                {dog.tags.map((tag) => (
                  <View key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full mr-2 mb-1">
                    <Text className="text-xs font-semibold text-gray-600">{tag}</Text>
                  </View>
                ))}
              </View>
              <Text className="text-gray-600 text-sm leading-5" numberOfLines={2}>
                {dog.bio}
              </Text>
            </View>

            <View className="mt-2">
              <View className="flex-row justify-between mb-1">
                <Text className="text-[10px] text-gray-400 font-bold uppercase">Couch Potato</Text>
                <Text className="text-[10px] text-gray-400 font-bold uppercase">Zoomies</Text>
              </View>
              <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <View
                  className="h-full bg-[#FF6B35] rounded-full"
                  style={{ width: `${dog.energy}%` }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View className="h-24 flex-row items-center justify-center space-x-6 px-4 pb-4">
        <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center shadow">
          <RotateCcw size={20} color="#9CA3AF" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => onSwipe('left')}
          className="w-16 h-16 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100"
        >
          <X size={32} color="#9CA3AF" strokeWidth={3} />
        </TouchableOpacity>

        <TouchableOpacity className="w-12 h-12 bg-white rounded-full items-center justify-center shadow">
          <Star size={20} color="#2E86AB" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => onSwipe('right')}
          className="w-16 h-16 bg-[#FF6B35] rounded-full items-center justify-center shadow-lg"
        >
          <Heart size={32} color="white" fill="white" />
        </TouchableOpacity>
      </View>

      {/* Match Modal */}
      <Modal
        visible={!!justMatched}
        transparent={true}
        animationType="fade"
      >
        <View className="flex-1 bg-black/90 items-center justify-center p-6">
          <Text className="text-[#FF6B35] font-black text-5xl mb-8 italic tracking-tighter text-center -rotate-6">
            IT'S A MATCH!
          </Text>
          
          <View className="flex-row items-center justify-center mb-10">
            <View className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl mr-[-20px] z-10">
              <Image 
                source={{ uri: "https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=200" }} 
                className="w-full h-full"
              />
            </View>
            <View className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl">
              <Image 
                source={{ uri: justMatched?.image }} 
                className="w-full h-full"
              />
            </View>
          </View>

          <View className="mb-8">
            <Text className="text-white text-xl font-bold text-center">
              You and {justMatched?.name}'s human matched!
            </Text>
            <Text className="text-white text-sm opacity-75 text-center mt-2">
              Now go sniff some butts (respectfully).
            </Text>
          </View>

          <TouchableOpacity 
            onPress={() => {
              setJustMatched(null);
            }}
            className="w-full bg-[#FF6B35] py-4 rounded-full items-center justify-center flex-row mb-4"
          >
            <MessageCircle size={20} color="white" />
            <Text className="text-white font-bold text-lg ml-2">Send a Bark</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setJustMatched(null)}
            className="w-full bg-transparent border-2 border-white py-4 rounded-full items-center justify-center"
          >
            <Text className="text-white font-bold text-lg">Keep Sniffing</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
