
import React from 'react';
import { SUPPORTED_LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
  disabled: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, onSelectLanguage, disabled }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap justify-center gap-2">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => onSelectLanguage(lang.id)}
            disabled={disabled}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ease-in-out
              ${selectedLanguage === lang.id
                ? 'bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-400 ring-offset-2 ring-offset-gray-900'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};
