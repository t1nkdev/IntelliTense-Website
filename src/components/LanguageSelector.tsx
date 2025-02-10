'use client';
import { Globe } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
  { code: 'pt', label: 'Português' },
  { code: 'ru', label: 'Русский' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'zh', label: '中文' }
];

interface LanguageSelectorProps {
  scrolled: boolean;
}

export default function LanguageSelector({ scrolled }: LanguageSelectorProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 px-2">
        <Globe className="w-3.5 h-3.5" />
        <span>English</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="bg-white border border-gray-200 rounded-lg p-1 min-w-[140px] mt-2 shadow-lg max-h-[400px] overflow-y-auto"
          sideOffset={5}
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              className="text-sm px-3 py-2 cursor-pointer outline-none rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {lang.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
} 