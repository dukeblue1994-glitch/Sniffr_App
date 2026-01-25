import AuthButtons from "@/components/AuthButtons";
import SniffrApp from "@/components/SniffrApp";
import { useConsolePatch } from "@/hooks/useConsolePatch";

export default function Home() {
  useConsolePatch();
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-md mx-auto mb-4">
        <AuthButtons />
      </div>
      <SniffrApp />
    </div>
  );
}
