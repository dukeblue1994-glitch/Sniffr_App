import { create } from 'zustand';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { db, auth } from '../lib/firebase';
import { collection, query, onSnapshot, where, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';

interface Dog {
  id: number;
  name: string;
  breed: string;
  age: number;
  bio: string;
  image: string;
  tags: string[];
  energy: number;
  owner: {
    name: string;
    age: number;
    gender: string;
    interestedIn: string;
  };
}

interface Match {
  id: number;
  name: string;
  breed: string;
  ownerName: string;
  image: string;
  lastMessage: string;
  unread: boolean;
  messages?: any[];
}

interface AppState {
  myProfile: any;
  currentDogIndex: number;
  matches: Match[];
  isGold: boolean;
  justMatched: Dog | null;
  activeChat: any | null;
  isGeneratingBio: boolean;
  isGeneratingIcebreaker: boolean;
  icebreakerSuggestions: string[];
  isPlanningDate: boolean;
  dateSuggestion: string | null;

  // Actions
  setMyProfile: (profile: any) => void;
  setCurrentDogIndex: (index: number) => void;
  setMatches: (matches: Match[]) => void;
  setIsGold: (isGold: boolean) => void;
  setJustMatched: (dog: Dog | null) => void;
  setActiveChat: (chat: any) => void;
  addMessage: (matchId: number, message: any) => void;
  handleSwipe: (direction: 'left' | 'right', dogs: Dog[]) => void;
  setIsGeneratingBio: (val: boolean) => void;
  setIcebreakerSuggestions: (suggestions: string[]) => void;
  setDateSuggestion: (suggestion: string | null) => void;
  subscribeToMatches: () => () => void;
  sendFirestoreMessage: (matchId: string, text: string) => Promise<void>;
}

export const useStore = create<AppState>((set, get) => ({
  myProfile: {
    name: "Buster",
    age: 3,
    breed: "Golden Retriever",
    bio: "I will steal your socks. My human loves hiking and craft beer.",
    tags: ["Vaccinated", "Ball Obsessed", "High Energy"],
    owner: {
      name: "Chris",
      age: 29,
      gender: "Male",
      interestedIn: "Women",
    },
  },
  currentDogIndex: 0,
  matches: [],
  isGold: false,
  justMatched: null,
  activeChat: null,
  isGeneratingBio: false,
  isGeneratingIcebreaker: false,
  icebreakerSuggestions: [],
  isPlanningDate: false,
  dateSuggestion: null,

  setMyProfile: (profile) => set({ myProfile: profile }),
  setCurrentDogIndex: (index) => set({ currentDogIndex: index }),
  setMatches: (matches) => set({ matches }),
  setIsGold: (isGold) => set({ isGold }),
  setJustMatched: (justMatched) => set({ justMatched }),
  setActiveChat: (activeChat) => set({ activeChat }),
  
  addMessage: (matchId, message) => set((state) => ({
    matches: state.matches.map(m => m.id === matchId ? { ...m, messages: [...(m.messages || []), message], lastMessage: message.text } : m)
  })),

  setIsGeneratingBio: (val) => set({ isGeneratingBio: val }),
  setIcebreakerSuggestions: (suggestions) => set({ icebreakerSuggestions: suggestions }),
  setDateSuggestion: (suggestion) => set({ dateSuggestion: suggestion }),

  subscribeToMatches: () => {
    const user = auth.currentUser;
    if (!user) return () => {};

    const q = query(
      collection(db, 'matches'),
      where('userIds', 'array-contains', user.uid),
      orderBy('updatedAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const matches = snapshot.docs.map(doc => ({
        id: doc.id as any,
        ...doc.data()
      })) as Match[];
      set({ matches });
    });

    return unsubscribe;
  },

  sendFirestoreMessage: async (matchId, text) => {
    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, `matches/${matchId}/messages`), {
      text,
      senderId: user.uid,
      createdAt: serverTimestamp(),
    });
  },

  handleSwipe: (direction, dogs) => {
    const { currentDogIndex, isGold } = get();
    const currentDog = dogs[currentDogIndex];

    if (direction === 'right') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const isMatch = Math.random() > 0.3;
      if (isMatch) {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }
        const newMatch = {
          id: currentDog.id,
          name: currentDog.name,
          breed: currentDog.breed,
          ownerName: currentDog.owner.name,
          image: currentDog.image,
          lastMessage: "New Match! Say hello.",
          unread: true,
          messages: []
        };
        set((state) => ({ 
          justMatched: currentDog,
          matches: [...state.matches, newMatch]
        }));
      }
    }

    const nextIndex = currentDogIndex < dogs.length - 1 ? currentDogIndex + 1 : 0;
    set({ currentDogIndex: nextIndex });
  },
}));
