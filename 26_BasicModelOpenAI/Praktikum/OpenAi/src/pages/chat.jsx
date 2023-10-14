import { useState } from "react";
import OpenAI from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (prompt.length === 0) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      });

      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setPrompt("");
    setResult("");
  };

  return (
    <main className="bg-blue-900 from-blue-600 to-blue-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Chat with OpenAI
        </h1>

        <div className="mb-4 flex justify-between">
          <button className="hover:text-blue-500 p-2">
            <a href="/home" className="text-blue-500">
              Home
            </a>
          </button>
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600"
          >
            Clear
          </button>
        </div>
        <div className="mb-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Send a message..."
            className="w-full p-3 border border-gray-300 rounded-lg resize-none bg-gray-100 text-gray-800"
            style={{ minHeight: "100px" }}
          ></textarea>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="p-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <pre
          className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-100 overflow-y-auto text-sm text-gray-800"
          style={{ maxHeight: "400px", whiteSpace: "pre-wrap" }}
        >
          {result}
        </pre>
      </div>
    </main>
  );
}

export default App;
