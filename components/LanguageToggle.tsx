
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-8 w-16 rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500"
      title={`Switch to ${language === 'xe' ? 'English' : 'Xelyon'}`}
    >
      <span className="sr-only">Toggle Language</span>
      <div className="absolute inset-0 flex items-center justify-around w-full px-1">
        <span className={`text-xs font-bold transition-colors ${language === 'xe' ? 'text-white' : 'text-slate-400'}`}>XE</span>
        <span className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-slate-400'}`}>EN</span>
      </div>
      <span 
        className={`absolute top-1/2 -translate-y-1/2 inline-block w-7 h-6 bg-indigo-600 rounded-full transition-transform duration-300 ease-in-out`}
        style={{ transform: `translateX(${language === 'xe' ? '4px' : '36px'}) translateY(-50%)` }}
      />
    </button>
  );
};
