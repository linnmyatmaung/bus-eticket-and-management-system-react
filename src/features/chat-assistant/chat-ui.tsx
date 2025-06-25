import { Bot } from "lucide-react";
import { useRef } from "react";

export default function DreamStayChatUI() {
  // Toggle between using mock data and real API responses.
  // Set `isMock` to true during development or testing to simulate API responses
  // without making real network requests. This is useful for faster iteration and
  // save token . Set to false in production to use real api.

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 w-full md:w-[600px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900">Trip Hub Assistant</h1>
            <p className="text-sm text-gray-500">Your personal chat bot</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-2">
        <div className="max-w-4xl mx-auto h-52 overflow-auto px-2">
          {/* Typing Indicator */}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="px-6 py-3 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3"></div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 justify-center items-center">
            <div className="flex-1 relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
