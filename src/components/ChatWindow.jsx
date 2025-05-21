import { useState } from 'react';

export default function ChatWindow() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi, I\'m VORA. Ask me anything about NAVORA.' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setMessages([...newMessages, { role: 'assistant', content: data.response }]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto mt-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 h-96 overflow-y-auto space-y-2 text-white">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <span className="block whitespace-pre-wrap">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask VORA..."
          className="flex-1 p-2 rounded-l-xl bg-gray-800 text-white"
        />
        <button onClick={sendMessage} className="bg-cyan-500 px-4 rounded-r-xl text-white">Send</button>
      </div>
    </div>
  );
}
