export async function callAI({
  prompt,
  kind,
}: {
  prompt: string;
  kind?: string;
}) {
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, kind }),
  });
  if (!res.ok) return null;
  const j = await res.json();
  return j.text as string | null;
}
