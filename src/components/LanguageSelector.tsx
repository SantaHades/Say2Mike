
import React, { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  label: string;
  defaultLanguage: string;
  position?: 'left' | 'right';
  onLanguageChange?: (language: string) => void;
}

// Comprehensive list of languages with country flags
const languages = [
  { code: 'ar-AE', name: '🇦🇪 United Arab Emirates (العربية)' },
  { code: 'ar-BH', name: '🇧🇭 Bahrain (العربية)' },
  { code: 'ar-DZ', name: '🇩🇿 Algeria (العربية)' },
  { code: 'ar-EG', name: '🇪🇬 Egypt (العربية)' },
  { code: 'ar-IQ', name: '🇮🇶 Iraq (العربية)' },
  { code: 'ar-JO', name: '🇯🇴 Jordan (العربية)' },
  { code: 'ar-KM', name: '🇰🇲 Comoros (العربية)' },
  { code: 'ar-KW', name: '🇰🇼 Kuwait (العربية)' },
  { code: 'ar-LB', name: '🇱🇧 Lebanon (العربية)' },
  { code: 'ar-LY', name: '🇱🇾 Libya (العربية)' },
  { code: 'ar-MA', name: '🇲🇦 Morocco (العربية)' },
  { code: 'ar-MR', name: '🇲🇷 Mauritania (العربية)' },
  { code: 'ar-OM', name: '🇴🇲 Oman (العربية)' },
  { code: 'ar-PS', name: '🇵🇸 Palestine (العربية)' },
  { code: 'ar-QA', name: '🇶🇦 Qatar (العربية)' },
  { code: 'ar-SA', name: '🇸🇦 Saudi Arabia (العربية)' },
  { code: 'ar-SD', name: '🇸🇩 Sudan (العربية)' },
  { code: 'ar-SY', name: '🇸🇾 Syria (العربية)' },
  { code: 'ar-TN', name: '🇹🇳 Tunisia (العربية)' },
  { code: 'ar-YE', name: '🇾🇪 Yemen (العربية)' },
  { code: 'am-ET', name: '🇪🇹 Ethiopia (አማርኛ)' },
  { code: 'az-AZ', name: '🇦🇿 Azerbaijan (Azərbaycan dili)' },
  { code: 'be-BY', name: '🇧🇾 Belarus (Беларуская)' },
  { code: 'bg-BG', name: '🇧🇬 Bulgaria (Български)' },
  { code: 'bi-VU', name: '🇻🇺 Vanuatu (Bislama)' },
  { code: 'bn-BD', name: '🇧🇩 Bangladesh (বাংলা)' },
  { code: 'bs-BA', name: '🇧🇦 Bosnia and Herzegovina (Bosanski)' },
  { code: 'ca-AD', name: '🇦🇩 Andorra (Català)' },
  { code: 'cnr-ME', name: '🇲🇪 Montenegro (Crnogorski)' },
  { code: 'crs-SC', name: '🇸🇨 Seychelles (Kreol Seselwa)' },
  { code: 'cs-CZ', name: '🇨🇿 Czech Republic (Čeština)' },
  { code: 'da-DK', name: '🇩🇰 Denmark (Dansk)' },
  { code: 'de-AT', name: '🇦🇹 Austria (Deutsch)' },
  { code: 'de-CH', name: '🇨🇭 Switzerland (Deutsch)' },
  { code: 'de-DE', name: '🇩🇪 Germany (Deutsch)' },
  { code: 'de-LI', name: '🇱🇮 Liechtenstein (Deutsch)' },
  { code: 'dv-MV', name: '🇲🇻 Maldives (ދިވެހި)' },
  { code: 'dz-BT', name: '🇧🇹 Bhutan (རྫོང་ཁ)' },
  { code: 'el-CY', name: '🇨🇾 Cyprus (Ελληνικά)' },
  { code: 'el-GR', name: '🇬🇷 Greece (Ελληνικά)' },
  { code: 'en-AG', name: '🇦🇬 Antigua and Barbuda (English)' },
  { code: 'en-AU', name: '🇦🇺 Australia (English)' },
  { code: 'en-BB', name: '🇧🇧 Barbados (English)' },
  { code: 'en-BS', name: '🇧🇸 Bahamas (English)' },
  { code: 'en-BZ', name: '🇧🇿 Belize (English)' },
  { code: 'en-CA', name: '🇨🇦 Canada (English)' },
  { code: 'en-DM', name: '🇩🇲 Dominica (English)' },
  { code: 'en-FJ', name: '🇫🇯 Fiji (English)' },
  { code: 'en-FM', name: '🇫🇲 Micronesia (English)' },
  { code: 'en-GB', name: '🇬🇧 United Kingdom (English)' },
  { code: 'en-GD', name: '🇬🇩 Grenada (English)' },
  { code: 'en-GH', name: '🇬🇭 Ghana (English)' },
  { code: 'en-GM', name: '🇬🇲 Gambia (English)' },
  { code: 'en-GY', name: '🇬🇾 Guyana (English)' },
  { code: 'en-IE', name: '🇮🇪 Ireland (English)' },
  { code: 'en-JM', name: '🇯🇲 Jamaica (English)' },
  { code: 'en-KI', name: '🇰🇮 Kiribati (English)' },
  { code: 'en-KN', name: '🇰🇳 Saint Kitts and Nevis (English)' },
  { code: 'en-LC', name: '🇱🇨 Saint Lucia (English)' },
  { code: 'en-LR', name: '🇱🇷 Liberia (English)' },
  { code: 'en-NA', name: '🇳🇦 Namibia (English)' },
  { code: 'en-NG', name: '🇳🇬 Nigeria (English)' },
  { code: 'en-NZ', name: '🇳🇿 New Zealand (English)' },
  { code: 'en-PW', name: '🇵🇼 Palau (English)' },
  { code: 'en-SB', name: '🇸🇧 Solomon Islands (English)' },
  { code: 'en-SG', name: '🇸🇬 Singapore (English)' },
  { code: 'en-SL', name: '🇸🇱 Sierra Leone (English)' },
  { code: 'en-SS', name: '🇸🇸 South Sudan (English)' },
  { code: 'en-TT', name: '🇹🇹 Trinidad and Tobago (English)' },
  { code: 'en-UG', name: '🇺🇬 Uganda (English)' },
  { code: 'en-US', name: '🇺🇸 United States (English)' },
  { code: 'en-VC', name: '🇻🇨 Saint Vincent and the Grenadines (English)' },
  { code: 'en-ZA', name: '🇿🇦 South Africa (English)' },
  { code: 'en-ZM', name: '🇿🇲 Zambia (English)' },
  { code: 'en-ZW', name: '🇿🇼 Zimbabwe (English)' },
  { code: 'es-AR', name: '🇦🇷 Argentina (Español)' },
  { code: 'es-BO', name: '🇧🇴 Bolivia (Español)' },
  { code: 'es-CL', name: '🇨🇱 Chile (Español)' },
  { code: 'es-CO', name: '🇨🇴 Colombia (Español)' },
  { code: 'es-CR', name: '🇨🇷 Costa Rica (Español)' },
  { code: 'es-CU', name: '🇨🇺 Cuba (Español)' },
  { code: 'es-DO', name: '🇩🇴 Dominican Republic (Español)' },
  { code: 'es-EC', name: '🇪🇨 Ecuador (Español)' },
  { code: 'es-ES', name: '🇪🇸 Spain (Español)' },
  { code: 'es-GQ', name: '🇬🇶 Equatorial Guinea (Español)' },
  { code: 'es-GT', name: '🇬🇹 Guatemala (Español)' },
  { code: 'es-HN', name: '🇭🇳 Honduras (Español)' },
  { code: 'es-MX', name: '🇲🇽 Mexico (Español)' },
  { code: 'es-NI', name: '🇳🇮 Nicaragua (Español)' },
  { code: 'es-PA', name: '🇵🇦 Panama (Español)' },
  { code: 'es-PE', name: '🇵🇪 Peru (Español)' },
  { code: 'es-PY', name: '🇵🇾 Paraguay (Español)' },
  { code: 'es-SV', name: '🇸🇻 El Salvador (Español)' },
  { code: 'es-UY', name: '🇺🇾 Uruguay (Español)' },
  { code: 'es-VE', name: '🇻🇪 Venezuela (Español)' },
  { code: 'et-EE', name: '🇪🇪 Estonia (Eesti)' },
  { code: 'fa-IR', name: '🇮🇷 Iran (فارسی)' },
  { code: 'fi-FI', name: '🇫🇮 Finland (Suomi)' },
  { code: 'fil-PH', name: '🇵🇭 Philippines (Filipino)' },
  { code: 'fr-BE', name: '🇧🇪 Belgium (Français)' },
  { code: 'fr-BF', name: '🇧🇫 Burkina Faso (Français)' },
  { code: 'fr-BJ', name: '🇧🇯 Benin (Français)' },
  { code: 'fr-CD', name: '🇨🇩 Democratic Republic of the Congo (Français)' },
  { code: 'fr-CG', name: '🇨🇬 Congo (Français)' },
  { code: 'fr-CI', name: '🇨🇮 Côte d\'Ivoire (Français)' },
  { code: 'fr-CM', name: '🇨🇲 Cameroon (Français)' },
  { code: 'fr-DJ', name: '🇩🇯 Djibouti (Français)' },
  { code: 'fr-FR', name: '🇫🇷 France (Français)' },
  { code: 'fr-GA', name: '🇬🇦 Gabon (Français)' },
  { code: 'fr-GN', name: '🇬🇳 Guinea (Français)' },
  { code: 'fr-MC', name: '🇲🇨 Monaco (Français)' },
  { code: 'fr-ML', name: '🇲🇱 Mali (Français)' },
  { code: 'fr-NE', name: '🇳🇪 Niger (Français)' },
  { code: 'fr-SN', name: '🇸🇳 Senegal (Français)' },
  { code: 'fr-TD', name: '🇹🇩 Chad (Français)' },
  { code: 'fr-TG', name: '🇹🇬 Togo (Français)' },
  { code: 'he-IL', name: '🇮🇱 Israel (עברית)' },
  { code: 'hi-IN', name: '🇮🇳 India (हिन्दी)' },
  { code: 'hr-HR', name: '🇭🇷 Croatia (Hrvatski)' },
  { code: 'ht-HT', name: '🇭🇹 Haiti (Kreyòl ayisyen)' },
  { code: 'hu-HU', name: '🇭🇺 Hungary (Magyar)' },
  { code: 'hy-AM', name: '🇦🇲 Armenia (Հայերեն)' },
  { code: 'id-ID', name: '🇮🇩 Indonesia (Bahasa Indonesia)' },
  { code: 'is-IS', name: '🇮🇸 Iceland (Íslenska)' },
  { code: 'it-IT', name: '🇮🇹 Italy (Italiano)' },
  { code: 'it-SM', name: '🇸🇲 San Marino (Italiano)' },
  { code: 'it-VA', name: '🇻🇦 Vatican City (Italiano)' },
  { code: 'ja-JP', name: '🇯🇵 Japan (日本語)' },
  { code: 'ka-GE', name: '🇬🇪 Georgia (ქართული)' },
  { code: 'kk-KZ', name: '🇰🇿 Kazakhstan (Қазақ тілі)' },
  { code: 'km-KH', name: '🇰🇭 Cambodia (ភាសាខ្មែរ)' },
  { code: 'ko-KP', name: '🇰🇵 North Korea (한국어)' },
  { code: 'ko-KR', name: '🇰🇷 South Korea (한국어)' },
  { code: 'ky-KG', name: '🇰🇬 Kyrgyzstan (Кыргызча)' },
  { code: 'lb-LU', name: '🇱🇺 Luxembourg (Lëtzebuergesch)' },
  { code: 'lo-LA', name: '🇱🇦 Laos (ພາສາລາວ)' },
  { code: 'lt-LT', name: '🇱🇹 Lithuania (Lietuvių)' },
  { code: 'lv-LV', name: '🇱🇻 Latvia (Latviešu)' },
  { code: 'mfe-MU', name: '🇲🇺 Mauritius (Kreol Morisien)' },
  { code: 'mg-MG', name: '🇲🇬 Madagascar (Malagasy)' },
  { code: 'mh-MH', name: '🇲🇭 Marshall Islands (Marshallese)' },
  { code: 'mk-MK', name: '🇲🇰 North Macedonia (Македонски)' },
  { code: 'mn-MN', name: '🇲🇳 Mongolia (Монгол хэл)' },
  { code: 'ms-BN', name: '🇧🇳 Brunei (Bahasa Melayu)' },
  { code: 'ms-MY', name: '🇲🇾 Malaysia (Bahasa Melayu)' },
  { code: 'mt-MT', name: '🇲🇹 Malta (Malti)' },
  { code: 'my-MM', name: '🇲🇲 Myanmar (မြန်မာဘာသာ)' },
  { code: 'na-NR', name: '🇳🇷 Nauru (Nauruan)' },
  { code: 'ne-NP', name: '🇳🇵 Nepal (नेपाली)' },
  { code: 'nl-BE', name: '🇧🇪 Belgium (Nederlands)' },
  { code: 'nl-NL', name: '🇳🇱 Netherlands (Nederlands)' },
  { code: 'nl-SR', name: '🇸🇷 Suriname (Nederlands)' },
  { code: 'no-NO', name: '🇳🇴 Norway (Norsk)' },
  { code: 'ny-MW', name: '🇲🇼 Malawi (Chichewa)' },
  { code: 'pl-PL', name: '🇵🇱 Poland (Polski)' },
  { code: 'prs-AF', name: '🇦🇫 Afghanistan (دري)' },
  { code: 'pt-AO', name: '🇦🇴 Angola (Português)' },
  { code: 'pt-BR', name: '🇧🇷 Brazil (Português)' },
  { code: 'pt-CV', name: '🇨🇻 Cape Verde (Português)' },
  { code: 'pt-GW', name: '🇬🇼 Guinea-Bissau (Português)' },
  { code: 'pt-MZ', name: '🇲🇿 Mozambique (Português)' },
  { code: 'pt-PT', name: '🇵🇹 Portugal (Português)' },
  { code: 'pt-ST', name: '🇸🇹 São Tomé and Príncipe (Português)' },
  { code: 'rn-BI', name: '🇧🇮 Burundi (Kirundi)' },
  { code: 'ro-MD', name: '🇲🇩 Moldova (Română)' },
  { code: 'ro-RO', name: '🇷🇴 Romania (Română)' },
  { code: 'ru-RU', name: '🇷🇺 Russia (Русский)' },
  { code: 'rw-RW', name: '🇷🇼 Rwanda (Kinyarwanda)' },
  { code: 'sg-CF', name: '🇨🇫 Central African Republic (Sängö)' },
  { code: 'si-LK', name: '🇱🇰 Sri Lanka (සිංහල)' },
  { code: 'sk-SK', name: '🇸🇰 Slovakia (Slovenčina)' },
  { code: 'sl-SI', name: '🇸🇮 Slovenia (Slovenščina)' },
  { code: 'sm-WS', name: '🇼🇸 Samoa (Gagana Samoa)' },
  { code: 'so-SO', name: '🇸🇴 Somalia (Soomaali)' },
  { code: 'sq-AL', name: '🇦🇱 Albania (Shqip)' },
  { code: 'sr-RS', name: '🇷🇸 Serbia (Српски)' },
  { code: 'ss-SZ', name: '🇸🇿 Eswatini (Siswati)' },
  { code: 'st-LS', name: '🇱🇸 Lesotho (Sesotho)' },
  { code: 'sv-SE', name: '🇸🇪 Sweden (Svenska)' },
  { code: 'sw-KE', name: '🇰🇪 Kenya (Swahili)' },
  { code: 'sw-TZ', name: '🇹🇿 Tanzania (Swahili)' },
  { code: 'tg-TJ', name: '🇹🇯 Tajikistan (Тоҷикӣ)' },
  { code: 'th-TH', name: '🇹🇭 Thailand (ไทย)' },
  { code: 'ti-ER', name: '🇪🇷 Eritrea (ትግርኛ)' },
  { code: 'tk-TM', name: '🇹🇲 Turkmenistan (Türkmen dili)' },
  { code: 'tn-BW', name: '🇧🇼 Botswana (Setswana)' },
  { code: 'to-TO', name: '🇹🇴 Tonga (Lea faka-Tonga)' },
  { code: 'tpi-PG', name: '🇵🇬 Papua New Guinea (Tok Pisin)' },
  { code: 'tr-TR', name: '🇹🇷 Turkey (Türkçe)' },
  { code: 'tvl-TV', name: '🇹🇻 Tuvalu (Tuvaluan)' },
  { code: 'uk-UA', name: '🇺🇦 Ukraine (Українська)' },
  { code: 'ur-PK', name: '🇵🇰 Pakistan (اردو)' },
  { code: 'uz-UZ', name: '🇺🇿 Uzbekistan (O\'zbek tili)' },
  { code: 'vi-VN', name: '🇻🇳 Vietnam (Tiếng Việt)' },
  { code: 'zh-CN', name: '🇨🇳 China (中文)' }
];

// Sort the languages alphabetically by name
const sortedLanguages = [...languages].sort((a, b) => {
  // Extract just the country name part (without flag and language)
  const countryA = a.name.split(' ').slice(1).join(' ');
  const countryB = b.name.split(' ').slice(1).join(' ');
  return countryA.localeCompare(countryB);
});

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  label, 
  defaultLanguage,
  position = 'left',
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    // Find the language by the two-letter code (like 'en') or the full code (like 'en-US')
    languages.find(lang => lang.code.startsWith(defaultLanguage) || lang.code === defaultLanguage) || 
    languages.find(lang => lang.code === 'en-US') || 
    languages[0]
  );

  const handleSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Extract just the language code part before the hyphen for backward compatibility
    const languageCode = language.code.split('-')[0];
    onLanguageChange?.(languageCode);
  };

  return (
    <div className="relative">
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <button 
        className="glass-morphism flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 hover:shadow-md transition-all duration-300 hover-lift"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4 text-blue-600" />
        <span className="truncate max-w-[160px]">{selectedLanguage.name}</span>
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform duration-300", 
          isOpen ? "rotate-180" : "")} 
        />
      </button>

      {isOpen && (
        <div 
          className={cn(
            "glass-morphism absolute mt-2 w-72 rounded-xl shadow-lg overflow-hidden z-50 animate-scale-in",
            position === 'left' ? "left-0" : "right-0"
          )}
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {sortedLanguages.map((language) => (
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
                <span className="flex items-center">
                  {language.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
