import Head from 'next/head';
import AIHead from '../components/AIHead';
import ChatWindow from '../components/ChatWindow';
import VoiceInput from '../components/VoiceInput';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>NAVORA AI Companion</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-4">
        <AIHead />
        <ChatWindow />
        <VoiceInput onTranscript={(text) => console.log('Voice said:', text)} />
      </main>
    </div>
  );
}
