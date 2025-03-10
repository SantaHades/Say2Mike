
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import LanguageSelector from './LanguageSelector';
import MicButton from './MicButton';

interface Message {
  id: string;
  translations: {
    [key: string]: string;
  };
  isMine: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [myLanguage, setMyLanguage] = useState('ko');
  const [theirLanguage, setTheirLanguage] = useState('en');

  // Example messages with translations for different languages
  const messages: Message[] = [
    {
      id: '1',
      translations: {
        ko: '안녕하세요! 오늘 어떻게 지내세요?',
        en: 'Hello! How are you doing today?',
        ja: 'こんにちは！今日はどうお過ごしですか？',
        zh: '你好！今天过得怎么样？',
        es: '¡Hola! ¿Cómo estás hoy?',
        fr: 'Bonjour! Comment allez-vous aujourd\'hui?'
      },
      isMine: true,
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: '2',
      translations: {
        ko: '잘 지내고 있어요, 물어봐 주셔서 감사합니다!',
        en: 'I\'m doing great, thanks for asking!',
        ja: '元気です、ありがとうございます！',
        zh: '我很好，谢谢关心！',
        es: '¡Estoy muy bien, gracias por preguntar!',
        fr: 'Je vais très bien, merci de demander!'
      },
      isMine: false,
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: '3',
      translations: {
        ko: '날씨가 정말 좋네요. 산책하러 가실래요?',
        en: 'The weather is really nice. Would you like to go for a walk?',
        ja: '天気が良いですね。散歩に行きませんか？',
        zh: '天气真好。要去散步吗？',
        es: 'El clima está muy agradable. ¿Te gustaría dar un paseo?',
        fr: 'Le temps est vraiment beau. Voulez-vous aller faire une promenade?'
      },
      isMine: true,
      timestamp: new Date(Date.now() - 180000)
    },
    {
      id: '4',
      translations: {
        ko: '네, 좋은 생각이네요!',
        en: 'Sure, that sounds like a great idea!',
        ja: 'はい、それは良いアイデアですね！',
        zh: '好啊，真是个好主意！',
        es: '¡Sí, eso suena como una gran idea!',
        fr: 'Oui, c\'est une excellente idée!'
      },
      isMine: false,
      timestamp: new Date(Date.now() - 120000)
    }
  ];

  const handleLanguageChange = (language: string, isMyLanguage: boolean) => {
    if (isMyLanguage) {
      setMyLanguage(language);
    } else {
      setTheirLanguage(language);
    }
  };

  // Instruction text translations
  const instructionText: Record<string, string> = {
    en: "Tap and speak in your language",
    ko: "탭하고 자국어로 말하세요",
    ja: "タップして自分の言語で話してください",
    zh: "点击并用您的语言说话",
    es: "Toca y habla en tu idioma",
    fr: "Appuyez et parlez dans votre langue",
    de: "Tippen und in Ihrer Sprache sprechen",
    it: "Tocca e parla nella tua lingua",
    ru: "Нажмите и говорите на своем языке",
    pt: "Toque e fale no seu idioma"
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-morphism shadow-xl">
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h3 className="font-medium">Multilingual Chat</h3>
        <div className="text-xs text-blue-200">Live Translation</div>
      </div>
      
      <div className="flex justify-between p-3 bg-blue-50 border-b border-blue-100">
        <LanguageSelector 
          label="Your language" 
          defaultLanguage={myLanguage} 
          position="left" 
          onLanguageChange={(lang) => handleLanguageChange(lang, true)}
        />
        <LanguageSelector 
          label="Their language" 
          defaultLanguage={theirLanguage} 
          position="right" 
          onLanguageChange={(lang) => handleLanguageChange(lang, false)}
        />
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
              <p className="text-sm">{message.translations[message.isMine ? myLanguage : theirLanguage]}</p>
              <div className="mt-1 pt-1 border-t border-white/20 text-xs opacity-90">
                {message.translations[message.isMine ? theirLanguage : myLanguage]}
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
        <span className="ml-3 text-sm text-gray-500">
          {instructionText[myLanguage] || instructionText.en}
        </span>
      </div>
    </div>
  );
};

export default ChatInterface;
