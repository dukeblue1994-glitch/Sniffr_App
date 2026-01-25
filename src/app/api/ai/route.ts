import type { NextRequest } from "next/server";

export const runtime = "nodejs";

function simulate(kind?: string): string {
  switch (kind) {
    case "bio":
      return "Professional sock thief and cuddle expert. My human Chris makes great tacos (for himself). 🌮🐾";
    case "icebreaker":
      return "Are you a treat? Because I'm drooling.|I sniffed you from a mile away (in a good way).|Does your human have a ball thrower arm?";
    case "playdate":
      return "How about a frisbee contest at the dog park followed by cold brews (coffee for humans, water for dogs)?";
    default:
      return "Woof! (This is a simulated AI response).";
  }
}

export async function POST(req: NextRequest) {
  const { prompt, kind } = await req.json();
  const key = process.env.OPENAI_API_KEY || "";

  if (!key) {
    return new Response(JSON.stringify({ text: simulate(kind) }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a playful dog-dating assistant. Reply concisely.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });
    if (!r.ok) {
      const errText = await r.text();
      console.error("OpenAI API error:", errText);
      return new Response(JSON.stringify({ text: null }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
    const j = await r.json();
    const text = j?.choices?.[0]?.message?.content ?? null;
    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("OpenAI proxy error:", e);
    return new Response(JSON.stringify({ text: null }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
