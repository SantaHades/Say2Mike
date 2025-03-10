
import React from 'react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import MicButton from './MicButton';

interface Message {
  id: string;
  text: string;
  translation: string;
  isMine: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  // Example messages
  const messages: Message[] = [
    {
      id: '1',
      text: '안녕하세요! 오늘 어떻게 지내세요?',
      translation: 'Hello! How are you doing today?',
      isMine: true,
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      text: 'I\'m doing great, thanks for asking!',
      translation: '잘 지내고 있어요, 물어봐 주셔서 감사합니다!',
      isMine: false,
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: '3',
      text: '날씨가 정말 좋네요. 산책하러 가실래요?',
      translation: 'The weather is really nice. Would you like to go for a walk?',
      isMine: true,
      timestamp: new Date(Date.now() - 180000)
    },
    {
      id: '4',
      text: 'Sure, that sounds like a great idea!',
      translation: '네, 좋은 생각이네요!',
      isMine: false,
      timestamp: new Date(Date.now() - 120000)
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-morphism shadow-xl">
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h3 className="font-medium">Multilingual Chat</h3>
        <div className="text-xs text-blue-200">Live Translation</div>
      </div>
      
      <div className="flex justify-between p-3 bg-blue-50 border-b border-blue-100">
        <LanguageSelector label="Your language" defaultLanguage="ko" position="left" />
        <LanguageSelector label="Their language" defaultLanguage="en" position="right" />
      </div>
      
      <div className="h-72 overflow-y-auto p-4 bg-white">
        {messages.map(message => (
          <div 
            key={message.id}
            className={cn(
              "mb-3 max-w-[80%]",
              message.isMine ? "ml-auto" : "mr-auto"
            )}
          >
            <div 
              className={cn(
                "p-3 rounded-2xl mb-1 shadow-sm",
                message.isMine 
                  ? "chat-bubble-mine bg-blue-600 text-white" 
                  : "chat-bubble-other bg-gray-100 text-gray-800"
              )}
            >
              <p className="text-sm">{message.text}</p>
              <div className="mt-1 pt-1 border-t border-white/20 text-xs opacity-90">
                {message.translation}
              </div>
            </div>
            <div 
              className={cn(
                "text-xs",
                message.isMine ? "text-right text-gray-500" : "text-left text-gray-500"
              )}
            >
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 flex items-center justify-center border-t border-gray-200 bg-gray-50">
        <MicButton size="md" className="hover-lift" />
        <span className="ml-3 text-sm text-gray-500">Tap and speak in your language</span>
      </div>
    </div>
  );
};

export default ChatInterface;
