
import React from 'react';
import { Header } from './components/Header';
import { DictionaryView } from './components/DictionaryView';
import { GrammarView } from './components/GrammarView';
import { WritingSystemView } from './components/WritingSystemView';
import { SampleTextsView } from './components/SampleTextsView';
import { parseXelyonData } from './data/xelyonData';
import type { XelyonData, ViewType } from './types';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [activeView, setActiveView] = React.useState<ViewType>('dictionary');
  const { translations } = useLanguage();

  const xelyonData: XelyonData = React.useMemo(() => parseXelyonData(), []);

  const renderContent = () => {
    switch (activeView) {
      case 'dictionary':
        return <DictionaryView dictionary={xelyonData.dictionary} />;
      case 'grammar':
        return <GrammarView grammar={xelyonData.grammar} />;
      case 'writing-system':
        return <WritingSystemView writingSystem={xelyonData.writingSystem} />;
      case 'sample-texts':
        return <SampleTextsView sampleTexts={xelyonData.sampleTexts} />;
      default:
        return <DictionaryView dictionary={xelyonData.dictionary} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 flex flex-col">
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        writingSystem={xelyonData.writingSystem} 
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {renderContent()}
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>{translations.footerText}</p>
      </footer>
    </div>
  );
};

export default App;