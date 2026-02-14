import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useStore } from '../../src/store/useStore';
import { MessageCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ChatsScreen() {
  const { matches, setActiveChat } = useStore();
  const router = useRouter();

  const renderMatch = ({ item }: { item: any }) => (
    <TouchableOpacity 
      className="flex-row items-center py-4 px-4 border-b border-gray-100 bg-white active:bg-gray-50"
      onPress={() => {
        setActiveChat(item);
        router.push(`/chat/${item.id}`);
      }}
    >
      <View className="relative">
        <Image 
          source={{ uri: item.image }} 
          className="w-16 h-16 rounded-full"
        />
        {item.unread && (
          <View className="absolute top-0 right-0 w-4 h-4 bg-[#FF6B35] rounded-full border-2 border-white" />
        )}
      </View>
      <View className="ml-4 flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-lg text-gray-800">{item.name}</Text>
          <Text className=
          "text-xs text-gray-400">2m ago</Text>
        </View>
        <Text 
          className={`text-sm mt-1 ${item.unread ? 'font-bold text-gray-900' : 'text-gray-500'}`} 
          numberOfLines={1}
        >
          {item.lastMessage}
        </Text>
        <Text className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
          Owner: {item.ownerName}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-100">
        <Text className="text-2xl font-black text-gray-800 tracking-tighter">Direct Barks</Text>
      </View>

      {matches.length === 0 ? (
        <View className="flex-1 items-center justify-center p-10">
          <View className="bg-gray-100 p-6 rounded-full mb-4">
            <MessageCircle size={48} color="#9CA3AF" />
          </View>
          <Text className="text-xl font-bold text-gray-800 text-center">No matches yet!</Text>
          <Text className="text-gray-500 text-center mt-2 leading-5">
            Start sniffing around the discovery deck to find some playmates.
          </Text>
        </View>
      ) : (
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMatch}
        />
      )}
    </SafeAreaView>
  );
}
