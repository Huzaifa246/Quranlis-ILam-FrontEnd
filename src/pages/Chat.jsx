import { useState } from "react";
import { chatMessage } from "../api/index";
import Loader from "../components/Loader";
import Button from "../components/Button";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { text: input, sender: "user" };
    setMessages((msgs) => [...msgs, userMsg]);
    try {
      const res = await chatMessage(input);
      setMessages((msgs) => [
        ...msgs,
        { text: res.data.answer, sender: "bot", quran: res.data.quran, hadith: res.data.hadith, lang: res.data.lang }
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Islamic Q&A Chat</h1>
      <form onSubmit={handleSend} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask an Islamic question (English/Urdu)"
          className="border p-2 rounded flex-1"
        />
        <Button type="submit">Send</Button>
      </form>
      <div className="space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded ${msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}>
            <div>{msg.text}</div>
            {msg.sender === "bot" && (
              <div className="mt-2 text-sm text-gray-700">
                {msg.quran && <div>Quran Ref: <span className="font-bold">{msg.quran.surah}:{msg.quran.ayah}</span></div>}
                {msg.hadith && <div>Hadith Ref: <span className="font-bold">{msg.hadith.ref}</span></div>}
                {msg.lang && <div>Language: <span className="font-bold">{msg.lang}</span></div>}
              </div>
            )}
          </div>
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
}
