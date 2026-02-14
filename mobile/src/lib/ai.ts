// mobile/src/lib/ai.ts
// Replace with your actual deployed Vercel URL or local IP for dev
const API_BASE_URL = "https://sniffr-app.vercel.app"; 

export async function callAI({
  prompt,
  kind,
}: {
  prompt: string;
  kind?: string;
}) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/ai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, kind }),
    });
    if (!res.ok) {
      console.error("AI API Error:", res.statusText);
      return null;
    }
    const j = await res.json();
    return j.text as string | null;
  } catch (error) {
    console.error("AI Fetch Failure:", error);
    return null;
  }
}
