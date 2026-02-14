import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image, SafeAreaView } from 'react-native';
import { Send, Sparkles, Calendar, RefreshCw, ChevronLeft } from 'lucide-react-native';
import { useStore } from '../../src/store/useStore';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { callAI } from '../../src/lib/ai';

export default function ChatDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { 
    activeChat, 
    addMessage, 
    myProfile, 
    isGeneratingIcebreaker, 
    icebreakerSuggestions,
    setIcebreakerSuggestions,
    dateSuggestion,
    setDateSuggestion,
    isPlanningDate 
  } = useStore();
  
  const [inputText, setInputText] = useState("");

  const handleSend = (text: string = inputText) => {
    if (!text.trim()) return;
    addMessage(Number(id), { sender: "me", text });
    setInputText("");
    setIcebreakerSuggestions([]);
    setDateSuggestion(null);
  };

  const generateIcebreakers = async () => {
    // Simulated or real call
    const prompt = `Generate 3 icebreakers for ${myProfile.name} to ${activeChat?.name}.`;
    const result = await callAI({ prompt, kind: "icebreaker" });
    if (result) {
      setIcebreakerSuggestions(result.split("|").map(s => s.trim()));
    } else {
       // Mock fallback
       setIcebreakerSuggestions(["Bark! How's the park today?", "Wanna sniff some butts?", "Is that a new collar?"]);
    }
  };

  const renderMessage = ({ item }: { item: any }) => (
    <View className={`mb-4 max-w-[80%] ${item.sender === 'me' ? 'self-end' : 'self-start'}`}>
      <View className={`p-4 rounded-2xl ${item.sender === 'me' ? 'bg-[#FF6B35] rounded-tr-none' : 'bg-gray-100 rounded-tl-none'}`}>
        <Text className={`${item.sender === 'me' ? 'text-white' : 'text-gray-800'}`}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <ChevronLeft size={24} color="#gray-800" />
        </TouchableOpacity>
        <Image source={{ uri: activeChat?.image }} className="w-10 h-10 rounded-full" />
        <View className="ml-3">
          <Text className="font-bold text-gray-800">{activeChat?.name}</Text>
          <Text className="text-xs text-green-500 font-bold">Zoomies Active</Text>
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
        keyboardVerticalOffset={100}
      >
        <FlatList
          data={activeChat?.messages || []}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderMessage}
          contentContainerStyle={{ padding: 16 }}
        />

        {/* AI Tools */}
        <View className="px-4 py-2 border-t border-gray-50 bg-[#F7F5F2]">
          <View className="flex-row space-x-2">
            <TouchableOpacity 
              onPress={generateIcebreakers}
              className="flex-row items-center bg-white px-3 py-2 rounded-full border border-orange-100"
            >
              <Sparkles size={14} color="#FF6B35" />
              <Text className="text-xs font-bold text-[#FF6B35] ml-1">Icebreakers</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center bg-white px-3 py-2 rounded-full border border-blue-100">
              <Calendar size={14} color="#2E86AB" />
              <Text className="text-xs font-bold text-[#2E86AB] ml-1">Plan Date</Text>
            </TouchableOpacity>
          </View>

          {icebreakerSuggestions.length > 0 && (
            <View className="mt-3 space-y-2">
              {icebreakerSuggestions.map((s, i) => (
                <TouchableOpacity key={i} onPress={() => handleSend(s)} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                  <Text className="text-sm text-gray-600">{s}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Input */}
        <View className="p-4 flex-row items-center border-t border-gray-100">
          <TextInput
            placeholder="Bark something..."
            value={inputText}
            onChangeText={setInputText}
            className="flex-1 bg-gray-100 px-4 py-3 rounded-full mr-2"
          />
          <TouchableOpacity 
            onPress={() => handleSend()}
            className="bg-[#FF6B35] w-12 h-12 rounded-full items-center justify-center"
          >
            <Send size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
