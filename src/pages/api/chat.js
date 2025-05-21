import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { messages } = req.body;

  const systemPrompt = {
    role: 'system',
    content: \`
You are VORA, the AI companion for NAVORA Technologies.
You are allowed to answer all general knowledge questions.
When asked about NAVORA, use the following context:

NAVORA is a patented AI-powered movement OS with modules for boating (HELM), driving (DRIVE), hiking, skiing, and more. It features group navigation, pulse-syncing, biometric safety detection, offline mesh communication, smart trip planning, and real-time hazard alerts. NAVORA Concierge automates travel reservations across flights, hotels, restaurants. NAVORA ID replaces usernames with movement-based identity. 50+ patent claims protect NAVORA’s architecture, including privacy contracts, swarm logic, SOS escalation, and terrain-based routing.

Only respond with NAVORA information when prompted directly. Otherwise, be a friendly general-purpose AI.
\`
  };

  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [systemPrompt, ...messages],
      temperature: 0.4,
      max_tokens: 800
    });

    res.status(200).json({ response: chat.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Chat failed.' });
  }
}
