'use client';
import { Globe } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' }
];

interface LanguageSelectorProps {
  scrolled: boolean;
}

export default function LanguageSelector({ scrolled }: LanguageSelectorProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={`flex items-center gap-1.5 text-sm transition-colors ${
        scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'
      }`}>
        <Globe className="w-4 h-4" />
        <span>EN</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={`${
          scrolled 
            ? 'bg-white border-gray-200' 
            : 'bg-black/95 border-white/10'
        } border rounded-lg p-1 min-w-[120px] mt-2 shadow-lg`}>
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              className={`text-sm px-3 py-2 cursor-pointer outline-none rounded-md ${
                scrolled
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {lang.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
} 