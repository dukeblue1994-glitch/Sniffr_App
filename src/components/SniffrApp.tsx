"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  X,
  MessageCircle,
  User,
  MapPin,
  ShieldCheck,
  Activity,
  ChevronLeft,
  Send,
  Dog,
  Bone,
  Settings,
  RotateCcw,
  Star,
  Check,
  Lock,
  CreditCard,
  Info,
  Sparkles,
  Edit2,
  RefreshCw,
  Calendar,
  Users,
} from "lucide-react";
import { callAI } from "@/lib/ai";

const WATERMARK = "Built by Candience LLC - KGuess 2026";

const MOCK_DOGS = [
  {
    id: 1,
    name: "Barnaby",
    age: 3,
    breed: "Golden Retriever",
    owner: { name: "Kevin", age: 28, gender: "Male" },
    distance: "0.5 miles",
    bio: "I will steal your socks. Kevin just wants a hiking buddy.",
    tags: ["Vaccinated", "Ball Obsessed", "High Energy"],
    image:
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=1000&auto=format&fit=crop",
    energy: 90,
  },
  {
    id: 2,
    name: "Luna",
    age: 2,
    breed: "French Bulldog",
    owner: { name: "Sarah", age: 26, gender: "Female" },
    distance: "1.2 miles",
    bio: "Small but mighty. Sarah brings the best snacks.",
    tags: ["Vaccinated", "Couch Potato", "Foodie"],
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop",
    energy: 30,
  },
  {
    id: 3,
    name: "Cooper",
    age: 5,
    breed: "Australian Shepherd",
    owner: { name: "Alex", age: 30, gender: "Non-binary" },
    distance: "2.0 miles",
    bio: "Herding pro. Alex is looking for coffee dates.",
    tags: ["Vaccinated", "Agility Pro", "Hyper"],
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop",
    energy: 100,
  },
  {
    id: 4,
    name: "Daisy",
    age: 4,
    breed: "Beagle",
    owner: { name: "Emily", age: 29, gender: "Female" },
    distance: "0.8 miles",
    bio: "Nose to the ground. Emily loves long walks.",
    tags: ["Scent Work", "Friendly", "Howler"],
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop",
    energy: 60,
  },
];

const INITIAL_MATCHES = [
  {
    id: 101,
    name: "Rocky",
    breed: "Boxer",
    ownerName: "Mike",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=200&auto=format&fit=crop",
    lastMessage: "Bark! (Hey!)",
    unread: true,
  },
  {
    id: 102,
    name: "Bella",
    breed: "Poodle",
    ownerName: "Jessica",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200&auto=format&fit=crop",
    lastMessage: "Are you going to the park today?",
    unread: false,
  },
];

export default function SniffrApp() {
  const [currentView, setCurrentView] = useState("splash");
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const [matches, setMatches] = useState(INITIAL_MATCHES);
  const [justMatched, setJustMatched] = useState<any>(null);
  const [activeChat, setActiveChat] = useState<any>(null);

  const [myProfile, setMyProfile] = useState({
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
  });

  const [isGold, setIsGold] = useState(false);
  const [showGoldModal, setShowGoldModal] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [isGeneratingIcebreaker, setIsGeneratingIcebreaker] = useState(false);
  const [icebreakerSuggestions, setIcebreakerSuggestions] = useState<string[]>(
    [],
  );
  const [isPlanningDate, setIsPlanningDate] = useState(false);
  const [dateSuggestion, setDateSuggestion] = useState<string | null>(null);

  const [chatInputValue, setChatInputValue] = useState("");

  useEffect(() => {
    if (currentView === "splash") {
      const timer = setTimeout(() => setCurrentView("main"), 1500);
      return () => clearTimeout(timer);
    }
  }, [currentView]);

  const handleSwipe = (direction: "left" | "right") => {
    const currentDog = MOCK_DOGS[currentDogIndex];
    if (direction === "right") {
      const isMatch = Math.random() > 0.3;
      if (isMatch) {
        setJustMatched(currentDog);
        setMatches((prev) => [
          ...prev,
          {
            id: currentDog.id,
            name: currentDog.name,
            breed: currentDog.breed,
            ownerName: currentDog.owner.name,
            image: currentDog.image,
            lastMessage: "New Match! Say hello.",
            unread: true,
          },
        ]);
        setCurrentView("match");
      }
    }
    if (currentDogIndex < MOCK_DOGS.length - 1) {
      setCurrentDogIndex((prev) => prev + 1);
    } else {
      setCurrentDogIndex(0);
    }
  };

  const handleRewind = () => {
    if (!isGold) {
      setShowGoldModal(true);
      return;
    }
    if (currentDogIndex > 0) setCurrentDogIndex((prev) => prev - 1);
  };

  const handlePurchase = () => {
    setProcessingPayment(true);
    setTimeout(() => {
      setIsGold(true);
      setProcessingPayment(false);
      setShowGoldModal(false);
      if (currentView === "gold") setCurrentView("profile");
    }, 2000);
  };

  const closeMatchOverlay = () => {
    setJustMatched(null);
    setCurrentView("main");
  };

  const handleSendMessage = (text: string) => {
    if (!activeChat) return;
    setActiveChat((prev: any) => ({
      ...prev,
      messages: [...prev.messages, { sender: "me", text }],
    }));
    setChatInputValue("");
    setIcebreakerSuggestions([]);
    setDateSuggestion(null);
  };

  const handleGenerateBio = async () => {
    setIsGeneratingBio(true);
    const prompt = `Write a bio for ${myProfile.name} (${myProfile.breed}) and owner ${myProfile.owner.name}.`;
    const newBio = await callAI({ prompt, kind: "bio" });
    if (newBio)
      setMyProfile((prev) => ({
        ...prev,
        bio: newBio.trim().replace(/^"|"$/g, ""),
      }));
    setIsGeneratingBio(false);
  };

  const handleGenerateIcebreakers = async () => {
    if (!activeChat) return;
    setIsGeneratingIcebreaker(true);
    setDateSuggestion(null);
    const prompt = `Generate 3 icebreakers for ${myProfile.name} to ${activeChat.name}. Return pipe-separated.`;
    const result = await callAI({ prompt, kind: "icebreaker" });
    if (result) {
      const suggestions = result
        .split("|")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      setIcebreakerSuggestions(suggestions.slice(0, 3));
    }
    setIsGeneratingIcebreaker(false);
  };

  const handlePlanDate = async () => {
    if (!activeChat) return;
    setIsPlanningDate(true);
    setIcebreakerSuggestions([]);
    setDateSuggestion(null);
    const prompt = `Plan a playdate for ${myProfile.name} and ${activeChat.name}.`;
    const result = await callAI({ prompt, kind: "playdate" });
    if (result) setDateSuggestion(result.trim());
    setIsPlanningDate(false);
  };

  const SplashScreen = () => (
    <div className="h-full w-full bg-[#FF6B35] flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="animate-bounce mb-4">
        <MapPin size={64} className="fill-white text-[#FF6B35]" />
      </div>
      <h1 className="text-5xl font-bold tracking-tighter mb-2">Sniffr.</h1>
      <p className="text-lg opacity-90 font-medium">Find your pack.</p>
      <p className="text-sm opacity-75 mt-1 font-medium">(And a partner.)</p>
      <div className="absolute bottom-10 flex flex-col items-center opacity-60">
        <p className="text-xs font-mono">{WATERMARK}</p>
        <p className="text-[10px] mt-1">v1.4.0 (Simulated AI)</p>
      </div>
    </div>
  );

  const GoldSubscriptionModal = () => (
    <div className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-300">
      <div className="bg-white w-full max-w-sm sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden">
        <button
          onClick={() => setShowGoldModal(false)}
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200"
        >
          <X size={20} />
        </button>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FF9F1C]/20 to-transparent pointer-events-none" />
        <div className="flex flex-col items-center mb-6 mt-4 relative">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#FF6B35] to-[#FF9F1C] rounded-full flex items-center justify-center shadow-lg mb-4">
            <Bone size={32} className="text-white fill-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Sniffr Gold
          </h2>
          <p className="text-gray-500 text-sm">
            Treat your dog to the best life.
          </p>
        </div>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full text-[#FF6B35]">
              <RotateCcw size={18} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Unlimited Rewinds</h4>
              <p className="text-xs text-gray-500">
                Undo accidental left swipes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full text-[#FF6B35]">
              <Star size={18} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">5 Super Barks / Week</h4>
              <p className="text-xs text-gray-500">Stand out from the pack.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full text-[#FF6B35]">
              <User size={18} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">See Who Liked You</h4>
              <p className="text-xs text-gray-500">
                Stop guessing, start playing.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handlePurchase}
          disabled={processingPayment}
          className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {processingPayment ? <>Processing...</> : <>Upgrade Now</>}
        </button>
      </div>
    </div>
  );

  const MatchOverlay = () => (
    <div className="absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="text-[#FF6B35] font-black text-5xl mb-8 italic tracking-tighter transform -rotate-6 drop-shadow-lg">
        IT'S A MATCH!
      </div>
      <div className="flex items-center justify-center space-x-4 mb-10">
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=200&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl">
          <img
            src={justMatched?.image}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-white text-center mb-8">
        <p className="text-xl font-bold">
          You and {justMatched?.name}'s human matched!
        </p>
        <p className="text-sm opacity-75">
          Now go sniff some butts (respectfully).
        </p>
      </div>
      <button
        onClick={() => {
          setActiveChat({
            id: justMatched.id,
            name: justMatched.name,
            breed: justMatched.breed,
            ownerName: justMatched.owner.name,
            image: justMatched.image,
            messages: [],
          });
          setJustMatched(null);
          setCurrentView("chat");
        }}
        className="w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold text-lg mb-4 hover:bg-[#e55a2b] transition-colors flex items-center justify-center gap-2"
      >
        <MessageCircle size={20} /> Send a Bark
      </button>
      <button
        onClick={closeMatchOverlay}
        className="w-full bg-transparent border-2 border-white text-white py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
      >
        Keep Sniffing
      </button>
    </div>
  );

  const MainDeck = () => {
    const dog = MOCK_DOGS[currentDogIndex];
    return (
      <div className="flex-1 relative flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-[#FF6B35]">
            <MapPin size={18} />
            <span className="ml-1 font-bold text-sm">
              Countryside Park (0.5 mi)
            </span>
          </div>
          <div className="bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer">
            Filters <Activity size={12} />
          </div>
        </div>
        <div className="flex-1 relative mb-4">
          <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-[65%] relative">
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-end gap-2">
                  <h2 className="text-4xl font-bold">{dog.name}</h2>
                  <span className="text-2xl font-medium mb-1 flex items-baseline gap-2">
                    & {dog.owner.name}{" "}
                    <span className="text-base opacity-80">
                      ({dog.owner.age})
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm opacity-90 mt-1">
                  <ShieldCheck size={16} className="text-[#6BC453]" />
                  <span className="font-semibold text-[#6BC453]">
                    Verified Vax
                  </span>
                  <span className="mx-2">•</span>
                  <span>{dog.breed}</span>
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between bg-[#F7F5F2]">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {dog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {dog.bio}
                </p>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-400 font-bold uppercase mb-1">
                  <span>Couch Potato</span>
                  <span>Zoomies</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF6B35] rounded-full"
                    style={{ width: `${dog.energy}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex items-center justify-center gap-6 px-4">
          <button
            onClick={handleRewind}
            className={`w-12 h-12 rounded-full shadow flex items-center justify-center transition-transform ${
              isGold
                ? "bg-white text-yellow-500 hover:scale-110"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            <RotateCcw size={20} />
          </button>
          <button
            onClick={() => handleSwipe("left")}
            className="w-16 h-16 bg-white rounded-full shadow-lg text-gray-400 flex items-center justify-center hover:bg-gray-50 hover:text-red-500 transition-all border border-gray-100"
          >
            <X size={32} strokeWidth={3} />
          </button>
          <button
            onClick={() => {
              if (!isGold) setShowGoldModal(true);
            }}
            className="w-12 h-12 bg-white rounded-full shadow text-[#2E86AB] flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Star
              size={20}
              fill={isGold ? "#FFD700" : "none"}
              className={isGold ? "text-[#FFD700]" : "text-[#2E86AB]"}
            />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="w-16 h-16 bg-[#FF6B35] rounded-full shadow-lg shadow-orange-200 text-white flex items-center justify-center hover:bg-[#e55a2b] transition-all hover:scale-105"
          >
            <Heart size={32} fill="white" />
          </button>
        </div>
      </div>
    );
  };

  const ChatList = () => (
    <div className="flex-1 bg-[#F7F5F2] flex flex-col">
      <div className="p-4 bg-white shadow-sm z-10">
        <h2 className="text-2xl font-bold text-[#FF6B35] mb-4">
          New Pack Members
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {matches
            .filter((m) => m.unread)
            .map((match) => (
              <div
                key={match.id}
                className="flex flex-col items-center flex-shrink-0 w-20"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#FF6B35] p-0.5 overflow-hidden">
                  <img
                    src={match.image}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold mt-1 text-gray-700">
                  {match.name}
                </span>
              </div>
            ))}
          {!isGold && (
            <div
              onClick={() => setShowGoldModal(true)}
              className="flex flex-col items-center flex-shrink-0 w-20 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400 p-0.5 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200"
                  className="w-full h-full rounded-full object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Lock size={20} className="text-white" />
                </div>
              </div>
              <span className="text-xs font-bold mt-1 text-yellow-600">
                See Who...
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
          Messages
        </h3>
        <div className="space-y-2">
          {matches.map((match) => (
            <div
              key={match.id}
              onClick={() => {
                setActiveChat({
                  ...match,
                  messages: [{ sender: "them", text: match.lastMessage }],
                });
                setCurrentView("activeChat");
                setIcebreakerSuggestions([]);
                setDateSuggestion(null);
                setChatInputValue("");
              }}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer active:scale-98 transition-transform"
            >
              <img
                src={match.image}
                className="w-14 h-14 rounded-full object-cover bg-gray-200"
              />
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-gray-800">
                    {match.name} & {match.ownerName}
                  </h4>
                  <span className="text-xs text-gray-400">2m ago</span>
                </div>
                <p
                  className={`text-sm truncate ${
                    match.unread
                      ? "font-semibold text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  {match.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ActiveChatView = () => (
    <div className="flex-1 flex flex-col bg-[#F7F5F2]">
      <div className="bg-white p-4 flex items-center shadow-sm">
        <button
          onClick={() => setCurrentView("chat")}
          className="mr-4 text-gray-500"
        >
          <ChevronLeft size={28} />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={activeChat.image} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800">
            {activeChat.name} & {activeChat.ownerName}
          </h3>
          <span className="text-xs text-[#6BC453] flex items-center gap-1">
            <div className="w-2 h-2 bg-[#6BC453] rounded-full animate-pulse" />{" "}
            Online
          </span>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="bg-[#2E86AB]/10 p-3 rounded-lg text-[#2E86AB] text-xs text-center mx-4 mb-4">
          🛡️ <strong>Safety Tip:</strong> Meet in a public, fenced area first.
          Keep leashes loose!
        </div>
        {activeChat.messages.map((msg: any, idx: number) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                msg.sender === "me"
                  ? "bg-[#FF6B35] text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {icebreakerSuggestions.length > 0 && (
          <div className="flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-1 text-xs text-[#FF6B35] font-bold uppercase tracking-wider mb-1">
              <Bone size={12} className="fill-[#FF6B35]" /> Icebreaker Fetch 🦴
            </div>
            {icebreakerSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                className="bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-3 rounded-xl text-sm text-left text-gray-700 hover:border-[#FF6B35] transition-colors shadow-sm"
              >
                "{suggestion}"
              </button>
            ))}
          </div>
        )}
        {dateSuggestion && (
          <div className="flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-1 text-xs text-[#2E86AB] font-bold uppercase tracking-wider mb-1">
              <Calendar size={12} /> Tail-Wagging Date Idea
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-3 rounded-xl text-sm text-gray-700 shadow-sm relative">
              "{dateSuggestion}"
              <button
                onClick={() => handleSendMessage(dateSuggestion!)}
                className="absolute bottom-2 right-2 text-[10px] font-bold text-[#2E86AB] bg-white px-2 py-1 rounded-full border border-blue-100 shadow-sm"
              >
                Send to Match
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <button
          onClick={handleGenerateIcebreakers}
          disabled={isGeneratingIcebreaker}
          className="p-3 bg-gradient-to-tr from-[#FF6B35] to-[#FF9F1C] rounded-full text-white shadow-md disabled:opacity-50 hover:scale-105 transition-transform"
          title="Fetch Icebreakers"
        >
          {isGeneratingIcebreaker ? (
            <RefreshCw size={18} className="animate-spin" />
          ) : (
            <Bone size={18} className="fill-white" />
          )}
        </button>
        <button
          onClick={handlePlanDate}
          disabled={isPlanningDate}
          className="p-3 bg-white border border-gray-200 rounded-full text-[#2E86AB] shadow-sm disabled:opacity-50 hover:scale-105 transition-transform hover:border-[#2E86AB]"
          title="Plan a Playdate"
        >
          {isPlanningDate ? (
            <RefreshCw size={18} className="animate-spin text-gray-400" />
          ) : (
            <Calendar size={18} />
          )}
        </button>
        <input
          type="text"
          placeholder="Type a bark..."
          value={chatInputValue}
          onChange={(e) => setChatInputValue(e.target.value)}
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
        />
        <button
          onClick={() =>
            chatInputValue.trim() && handleSendMessage(chatInputValue)
          }
          className="bg-[#2E86AB] p-3 rounded-full text-white"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );

  const SettingsView = () => (
    <div className="flex-1 bg-white flex flex-col">
      <div className="p-4 border-b border-gray-100 flex items-center">
        <button
          onClick={() => setCurrentView("profile")}
          className="mr-4 text-gray-500"
        >
          <ChevronLeft size={28} />
        </button>
        <h2 className="text-xl font-bold text-gray-800">Settings</h2>
      </div>
      <div className="p-6 space-y-6 overflow-y-auto">
        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Account
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => setIsGold(true)}
              className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg text-left"
            >
              <span className="text-sm font-medium">Restore Purchases</span>
              <RotateCcw size={16} className="text-gray-400" />
            </button>
            <div className="w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg text-left">
              <span className="text-sm font-medium">Notifications</span>
              <div className="w-10 h-6 bg-[#6BC453] rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Legal & Compliance
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Privacy Policy</span>
              <ChevronLeft size={16} className="text-gray-400 rotate-180" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Terms of Service</span>
              <ChevronLeft size={16} className="text-gray-400 rotate-180" />
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Open Source Licenses</span>
              <ChevronLeft size={16} className="text-gray-400 rotate-180" />
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Danger Zone
          </h3>
          <button className="w-full p-3 border border-red-200 text-red-500 rounded-lg text-sm font-bold bg-red-50">
            Delete Account
          </button>
          <p className="text-[10px] text-gray-400 mt-2">
            This will permanently remove your data in accordance with GDPR/CCPA
            regulations.
          </p>
        </section>
        <div className="pt-8 flex flex-col items-center">
          <p className="text-xs font-bold text-gray-300 mb-1">{WATERMARK}</p>
          <p className="text-[10px] text-gray-300">Made with ❤️ in React</p>
        </div>
      </div>
    </div>
  );

  const Profile = () => (
    <div className="flex-1 bg-[#F7F5F2] overflow-y-auto">
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=1000&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setCurrentView("settings")}
          className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors"
        >
          <Settings size={20} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              {myProfile.name}, {myProfile.age}{" "}
              {isGold && (
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
              )}
            </h1>
            <p className="text-gray-500">{myProfile.breed} • Male</p>
          </div>
          <button className="text-[#FF6B35] font-semibold text-sm flex items-center gap-1">
            <Edit2 size={14} /> Edit
          </button>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6 border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
            <Users size={18} className="text-[#2E86AB]" /> The Human Behind the
            Leash
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-50">
              <span className="text-sm text-gray-500">I am a...</span>
              <div className="flex gap-1">
                {["Male", "Female", "NB"].map((g) => (
                  <button
                    key={g}
                    onClick={() =>
                      setMyProfile((prev) => ({
                        ...prev,
                        owner: { ...prev.owner, gender: g },
                      }))
                    }
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      myProfile.owner.gender === g
                        ? "bg-[#2E86AB] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Interested in...</span>
              <div className="flex gap-1">
                {["Men", "Women", "Everyone"].map((i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setMyProfile((prev) => ({
                        ...prev,
                        owner: { ...prev.owner, interestedIn: i },
                      }))
                    }
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      myProfile.owner.interestedIn === i
                        ? "bg-[#FF6B35] text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-6">
          <div className="flex flex-col mb-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Bio
            </label>
            <span className="text-[10px] text-[#FF6B35]/80 italic font-medium mt-0.5">
              Showcase the Purebread in you 🦴
            </span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm relative group">
            <textarea
              value={myProfile.bio}
              onChange={(e) =>
                setMyProfile({ ...myProfile, bio: e.target.value })
              }
              className="w-full text-sm text-gray-600 bg-transparent resize-none focus:outline-none"
              rows={3}
            />
            <div className="flex justify-end mt-2 pt-2 border-t border-gray-50">
              <button
                onClick={handleGenerateBio}
                disabled={isGeneratingBio}
                className="text-xs font-bold text-[#FF6B35] flex items-center gap-1 hover:text-[#e55a2b] disabled:opacity-50 bg-orange-50 px-3 py-1.5 rounded-full"
              >
                {isGeneratingBio ? (
                  <>
                    <RefreshCw size={12} className="animate-spin" /> Fetching...
                  </>
                ) : (
                  <>
                    <Sparkles size={12} /> Fetch Bio Idea
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div
            onClick={() => {
              if (!isGold) setShowGoldModal(true);
            }}
            className={`p-5 rounded-xl shadow-sm border transition-all cursor-pointer ${
              isGold
                ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white border-gray-800"
                : "bg-white border-white"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3
                className={`font-bold flex items-center gap-2 ${
                  isGold ? "text-white" : "text-gray-800"
                }`}
              >
                {isGold ? (
                  <>
                    <Star size={18} fill="white" /> Sniffr Gold Member
                  </>
                ) : (
                  "Sniffr Free Plan"
                )}
              </h3>
              {isGold && (
                <span className="bg-white/20 text-[10px] px-2 py-1 rounded">
                  Active
                </span>
              )}
            </div>
            {!isGold ? (
              <>
                <p className="text-sm text-gray-500 mb-3">
                  Upgrade to see who likes you and get unlimited swipes.
                </p>
                <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] text-white py-2 rounded-lg text-sm font-bold shadow-md">
                  Upgrade to Gold
                </button>
              </>
            ) : (
              <p className="text-sm text-gray-300">
                Your next billing date is Feb 28, 2026. Thanks for supporting
                us!
              </p>
            )}
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#2E86AB]" /> Health Status
            </h3>
            <div className="flex gap-2">
              <span className="bg-[#6BC453]/10 text-[#6BC453] px-3 py-1 rounded-full text-xs font-bold border border-[#6BC453]/20 flex items-center gap-1">
                <Check size={12} /> Verified Vaccinated
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                Neutered
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <Activity size={18} className="text-[#FF6B35]" /> Energy Level
            </h3>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="80"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
              disabled
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold uppercase">
              <span>Chill</span>
              <span>Hyper</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto h-[800px] bg-white shadow-2xl overflow-hidden flex flex-col font-sans border-8 border-gray-900 rounded-[3rem] relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"></div>
      {currentView === "splash" ? (
        <SplashScreen />
      ) : (
        <>
          {showGoldModal && <GoldSubscriptionModal />}
          {currentView === "match" && <MatchOverlay />}
          <div className="flex-1 flex overflow-hidden pt-8">
            {currentView === "main" && <MainDeck />}
            {(currentView === "chat" || currentView === "activeChat") &&
              (currentView === "activeChat" ? (
                <ActiveChatView />
              ) : (
                <ChatList />
              ))}
            {currentView === "profile" && <Profile />}
            {currentView === "settings" && <SettingsView />}
          </div>
          {currentView !== "activeChat" && currentView !== "settings" && (
            <div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center px-2 pb-2 z-40">
              <button
                onClick={() => setCurrentView("main")}
                className={`p-3 rounded-2xl transition-all ${
                  currentView === "main"
                    ? "text-[#FF6B35] bg-[#FF6B35]/10"
                    : "text-gray-400"
                }`}
              >
                <Dog size={28} />
              </button>
              <button
                onClick={() => setCurrentView("chat")}
                className={`p-3 rounded-2xl transition-all relative ${
                  currentView === "chat"
                    ? "text-[#FF6B35] bg-[#FF6B35]/10"
                    : "text-gray-400"
                }`}
              >
                <MessageCircle size={28} />
                <span className="absolute top-2 right-2 w-3 h-3 bg-[#FF6B35] border-2 border-white rounded-full"></span>
              </button>
              <button
                onClick={() => setCurrentView("profile")}
                className={`p-3 rounded-2xl transition-all ${
                  currentView === "profile"
                    ? "text-[#FF6B35] bg-[#FF6B35]/10"
                    : "text-gray-400"
                }`}
              >
                <User size={28} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
