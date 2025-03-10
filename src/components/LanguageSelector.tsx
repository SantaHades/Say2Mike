
import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  label: string;
  defaultLanguage: string;
  position?: 'left' | 'right';
  onLanguageChange?: (language: string) => void;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' },
  { code: 'ja', name: '日本語' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'pt', name: 'Português' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  label, 
  defaultLanguage,
  position = 'left',
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(lang => lang.code === defaultLanguage) || languages[0]
  );

  const handleSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    onLanguageChange?.(language.code);
  };

  return (
    <div className="relative">
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <button 
        className="glass-morphism flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:shadow-md transition-all duration-300 hover-lift"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4 text-blue-600" />
        <span>{selectedLanguage.name}</span>
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-300", 
          isOpen ? "rotate-180" : "")} 
        />
      </button>

      {isOpen && (
        <div 
          className={cn(
            "glass-morphism absolute mt-2 w-48 rounded-xl shadow-lg overflow-hidden z-50 animate-scale-in",
            position === 'left' ? "left-0" : "right-0"
          )}
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className={cn(
                  "block w-full px-4 py-2 text-left text-sm transition-colors",
                  language.code === selectedLanguage.code
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => handleSelect(language)}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
