
import React, { useState } from 'react';
import type { ViewType, WritingSystem } from '../types';
import { TranslationModal } from './TranslationModal';
import { TranslateIcon } from './icons/TranslateIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  writingSystem: WritingSystem;
}

const NavButton: React.FC<{
  label: string;
  viewName: ViewType;
  activeView: ViewType;
  onClick: (view: ViewType) => void;
}> = ({ label, viewName, activeView, onClick }) => {
  const isActive = activeView === viewName;
  return (
    <button
      onClick={() => onClick(viewName)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300
        ${isActive
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
        }`}
    >
      {label}
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView, writingSystem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { translations } = useLanguage();

  return (
    <>
      <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10 shadow-lg shadow-slate-900/20">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="font-orbitron text-2xl font-bold text-white tracking-widest mb-4 sm:mb-0">
            <span className="text-indigo-400">XE</span>LYON
          </h1>
          <nav className="flex flex-wrap justify-center items-center gap-2 bg-slate-900/50 p-1 rounded-lg">
            <NavButton label={translations.navDictionary} viewName="dictionary" activeView={activeView} onClick={setActiveView} />
            <NavButton label={translations.navGrammar} viewName="grammar" activeView={activeView} onClick={setActiveView} />
            <NavButton label={translations.navWritingSystem} viewName="writing-system" activeView={activeView} onClick={setActiveView} />
            <NavButton label={translations.navSampleTexts} viewName="sample-texts" activeView={activeView} onClick={setActiveView} />
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-300"
              title={translations.languageTools}
            >
              <TranslateIcon className="w-5 h-5" />
              <span className="hidden sm:inline ml-2">{translations.languageTools}</span>
            </button>
            <div className="pl-2">
              <LanguageToggle />
            </div>
          </nav>
        </div>
      </header>
      <TranslationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        writingSystem={writingSystem}
      />
    </>
  );
};
