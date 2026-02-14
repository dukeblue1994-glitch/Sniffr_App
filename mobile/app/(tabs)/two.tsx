import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Settings, Star, Edit2, Users, Sparkles, RefreshCw, Bone } from 'lucide-react-native';
import { useStore } from '../../src/store/useStore';

export default function ProfileScreen() {
  const { 
    myProfile, 
    setMyProfile, 
    isGold, 
    isGeneratingBio, 
    setIsGeneratingBio 
  } = useStore();

  const handleFetchBioIdea = () => {
    setIsGeneratingBio(true);
    // Simulated AI fetch
    setTimeout(() => {
      setMyProfile({
        ...myProfile,
        bio: "Just a good boy looking for a park with extra squirrels and a human who shares their pizza crusts."
      });
      setIsGeneratingBio(false);
    }, 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7F5F2]">
      <ScrollView>
        {/* Cover Photo */}
        <View className="relative h-64">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=1000" }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <TouchableOpacity 
            className="absolute top-4 right-4 bg-black/30 p-2 rounded-full"
          >
            <Settings size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View className="p-6">
          {/* Header */}
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <View className="flex-row items-center">
                <Text className="text-3xl font-bold text-gray-800">
                  {myProfile.name}, {myProfile.age}
                </Text>
                {isGold && <Star size={20} color="#FACC15" fill="#FACC15" className="ml-2" />}
              </View>
              <Text className="text-gray-500">{myProfile.breed} • Male</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Edit2 size={14} color="#FF6B35" />
              <Text className="text-[#FF6B35] font-semibold text-sm ml-1">Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Human Profile Card */}
          <View className="bg-white p-4 rounded-xl shadow-sm mb-6 border border-gray-100">
            <View className="flex-row items-center mb-3">
              <Users size={18} color="#2E86AB" />
              <Text className="font-bold text-gray-700 ml-2">The Human Behind the Leash</Text>
            </View>
            
            <View className="space-y-4">
              <View className="flex-row justify-between items-center pb-2 border-b border-gray-50">
                <Text className="text-sm text-gray-500">I am a...</Text>
                <View className="flex-row space-x-2">
                  {["Male", "Female", "NB"].map((g) => (
                    <TouchableOpacity
                      key={g}
                      onPress={() => setMyProfile({ ...myProfile, owner: { ...myProfile.owner, gender: g } })}
                      className={`px-3 py-1 rounded-full ${myProfile.owner.gender === g ? 'bg-[#2E86AB]' : 'bg-gray-100'} mr-1`}
                    >
                      <Text className={`text-xs font-bold ${myProfile.owner.gender === g ? 'text-white' : 'text-gray-500'}`}>{g}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-sm text-gray-500">Interested in...</Text>
                <View className="flex-row space-x-2">
                  {["Men", "Women", "Everyone"].map((i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => setMyProfile({ ...myProfile, owner: { ...myProfile.owner, interestedIn: i } })}
                      className={`px-3 py-1 rounded-full ${myProfile.owner.interestedIn === i ? 'bg-[#FF6B35]' : 'bg-gray-100'} mr-1`}
                    >
                      <Text className={`text-xs font-bold ${myProfile.owner.interestedIn === i ? 'text-white' : 'text-gray-500'}`}>{i}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>

          {/* Bio Section */}
          <View className="mb-6">
            <View className="flex-row justify-between items-end mb-2">
              <View>
                <Text className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bio</Text>
                <Text className="text-[10px] text-[#FF6B35] italic font-medium">Showcase the Purebread in you 🦴</Text>
              </View>
            </View>
            <View className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <TextInput
                multiline
                numberOfLines={3}
                value={myProfile.bio}
                onChangeText={(text) => setMyProfile({ ...myProfile, bio: text })}
                className="text-sm text-gray-600 min-h-[80px]"
                textAlignVertical="top"
              />
              <View className="flex-row justify-end mt-2 pt-2 border-t border-gray-50">
                <TouchableOpacity 
                  onPress={handleFetchBioIdea}
                  disabled={isGeneratingBio}
                  className="flex-row items-center bg-orange-50 px-3 py-1.5 rounded-full"
                >
                  {isGeneratingBio ? (
                    <RefreshCw size={12} color="#FF6B35" />
                  ) : (
                    <Sparkles size={12} color="#FF6B35" />
                  )}
                  <Text className="text-xs font-bold text-[#FF6B35] ml-1">
                    {isGeneratingBio ? "Fetching..." : "Fetch Bio Idea"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Upgrade Section */}
          {!isGold && (
            <TouchableOpacity className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-2xl flex-row items-center justify-between shadow-lg overflow-hidden relative">
              <View className="flex-1">
                <Text className="text-white font-black text-xl italic tracking-tighter">GO GOLD</Text>
                <Text className="text-white text-xs opacity-90 max-w-[200px]">Unlock unlimited rewinds and more!</Text>
              </View>
              <Bone size={32} color="white" fill="white" className="opacity-50" />
            </TouchableOpacity>
          )}

          {/* Version Info */}
          <View className="mt-10 items-center opacity-30">
            <Text className="text-xs font-bold text-gray-400">Sniffr v2.0.0-mobile</Text>
            <Text className="text-[10px] text-gray-400 mt-1">Built with ❤️ in Expo</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
