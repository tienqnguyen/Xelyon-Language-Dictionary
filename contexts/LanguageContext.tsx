
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { en } from '../translations/en';
import { xe } from '../translations/xe';

type Language = 'xe' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: typeof en; // Use one as the shape
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('xe'); // Default to Xelyon

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'xe' ? 'en' : 'xe'));
  };

  const translations = language === 'xe' ? xe : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
