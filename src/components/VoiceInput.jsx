import { useState } from 'react';

export default function VoiceInput({ onTranscript }) {
  const [recording, setRecording] = useState(false);

  const handleRecord = async () => {
    setRecording(true);
    setTimeout(() => {
      setRecording(false);
      onTranscript("Simulated voice input asking about NAVORA.");
    }, 2000);
  };

  return (
    <button
      onClick={handleRecord}
      className={`mt-4 p-3 rounded-full text-white ${recording ? 'bg-red-600' : 'bg-cyan-600'}`}
    >
      🎙️ {recording ? 'Listening...' : 'Tap to Speak'}
    </button>
  );
}
