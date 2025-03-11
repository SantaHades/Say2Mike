
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
        fr: 'Bonjour! Comment allez-vous aujourd\'hui?',
        de: 'Hallo! Wie geht es Ihnen heute?',
        it: 'Ciao! Come stai oggi?',
        ru: 'Привет! Как у вас дела сегодня?',
        pt: 'Olá! Como você está hoje?',
        ar: 'مرحبا! كيف حالك اليوم؟',
        hi: 'नमस्ते! आज आप कैसे हैं?',
        vi: 'Xin chào! Hôm nay bạn thế nào?',
        id: 'Halo! Bagaimana kabar Anda hari ini?',
        nl: 'Hallo! Hoe gaat het vandaag met je?',
        pl: 'Cześć! Jak się dzisiaj masz?',
        tr: 'Merhaba! Bugün nasılsın?',
        th: 'สวัสดี! วันนี้คุณเป็นอย่างไรบ้าง?',
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
        fr: 'Je vais très bien, merci de demander!',
        de: 'Mir geht es gut, danke der Nachfrage!',
        it: 'Sto benissimo, grazie per averlo chiesto!',
        ru: 'У меня все отлично, спасибо, что спросили!',
        pt: 'Estou ótimo, obrigado por perguntar!',
        ar: 'أنا بخير، شكرا للسؤال!',
        hi: 'मैं बहुत अच्छा कर रहा हूँ, पूछने के लिए धन्यवाद!',
        vi: 'Tôi khỏe, cảm ơn vì đã hỏi!',
        id: 'Saya baik-baik saja, terima kasih sudah bertanya!',
        nl: 'Het gaat goed met me, bedankt voor het vragen!',
        pl: 'Mam się świetnie, dziękuję za pytanie!',
        tr: 'İyiyim, sorduğun için teşekkürler!',
        th: 'ฉันสบายดี ขอบคุณที่ถาม!',
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
        fr: 'Le temps est vraiment beau. Voulez-vous aller faire une promenade?',
        de: 'Das Wetter ist wirklich schön. Möchtest du spazieren gehen?',
        it: 'Il tempo è davvero bello. Ti piacerebbe fare una passeggiata?',
        ru: 'Погода действительно хорошая. Не хотите ли прогуляться?',
        pt: 'O tempo está muito bom. Gostaria de ir dar um passeio?',
        ar: 'الطقس جميل حقًا. هل ترغب في الذهاب للتنزه؟',
        hi: 'मौसम वाकई अच्छा है। क्या आप टहलने जाना चाहेंगे?',
        vi: 'Thời tiết thật đẹp. Bạn có muốn đi dạo không?',
        id: 'Cuacanya sangat bagus. Maukah Anda pergi berjalan-jalan?',
        nl: 'Het weer is echt mooi. Zou je een wandeling willen maken?',
        pl: 'Pogoda jest naprawdę ładna. Czy chciałbyś się przejść?',
        tr: 'Hava gerçekten güzel. Yürüyüşe çıkmak ister misin?',
        th: 'อากาศดีจริงๆ คุณอยากไปเดินเล่นไหม?',
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
        fr: 'Oui, c\'est une excellente idée!',
        de: 'Sicher, das klingt nach einer großartigen Idee!',
        it: 'Certo, sembra un\'ottima idea!',
        ru: 'Конечно, это звучит как отличная идея!',
        pt: 'Claro, isso parece uma ótima ideia!',
        ar: 'بالتأكيد، تبدو فكرة رائعة!',
        hi: 'ज़रूर, यह एक बहुत अच्छा विचार लगता है!',
        vi: 'Chắc chắn rồi, nghe như một ý tưởng tuyệt vời!',
        id: 'Tentu, itu terdengar seperti ide yang bagus!',
        nl: 'Zeker, dat klinkt als een geweldig idee!',
        pl: 'Jasne, to brzmi jak świetny pomysł!',
        tr: 'Elbette, kulağa harika bir fikir gibi geliyor!',
        th: 'แน่นอน นั่นฟังดูเป็นความคิดที่ยอดเยี่ยม!',
      },
      isMine: false,
      timestamp: new Date(Date.now() - 120000)
    }
  ];

  // Handle language changes from the language selector
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
    pt: "Toque e fale no seu idioma",
    ar: "اضغط وتحدث بلغتك",
    hi: "टैप करें और अपनी भाषा में बोलें",
    vi: "Nhấn và nói bằng ngôn ngữ của bạn",
    id: "Ketuk dan bicara dalam bahasa Anda",
    nl: "Tik en spreek in uw taal",
    pl: "Dotknij i mów w swoim języku",
    tr: "Dokunun ve dilinizde konuşun",
    th: "แตะและพูดในภาษาของคุณ"
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden glass-morphism shadow-xl">
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h3 className="font-medium">Multilingual Chat</h3>
        <div className="text-xs text-blue-200">Live Translation</div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between p-3 bg-blue-50 border-b border-blue-100">
        <div className="w-full mb-3 sm:mb-0 sm:mr-2">
          <LanguageSelector 
            label="Your language" 
            defaultLanguage={myLanguage} 
            position="left" 
            onLanguageChange={(lang) => handleLanguageChange(lang, true)}
          />
        </div>
        <div className="w-full sm:ml-2">
          <LanguageSelector 
            label="Their language" 
            defaultLanguage={theirLanguage} 
            position="right" 
            onLanguageChange={(lang) => handleLanguageChange(lang, false)}
          />
        </div>
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
              <p className="text-sm">{message.translations[message.isMine ? myLanguage : theirLanguage] || message.translations.en}</p>
              <div className="mt-1 pt-1 border-t border-white/20 text-xs opacity-90">
                {message.translations[message.isMine ? theirLanguage : myLanguage] || message.translations.en}
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
