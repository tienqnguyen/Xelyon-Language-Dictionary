
import React from 'react';
import type { SampleText } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SampleTextsViewProps {
  sampleTexts: SampleText[];
}

const SampleTextCard: React.FC<{ text: SampleText }> = ({ text }) => {
  const { translations } = useLanguage();
  return (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col h-full">
      <h3 className="font-orbitron text-xl text-indigo-400 mb-3">{text.title}</h3>
      <div className="space-y-4 flex-grow">
        <div>
          <h4 className="font-semibold text-teal-300 mb-1">{translations.xelyonLabel}</h4>
          <p className="text-slate-300 italic pl-4 border-l-2 border-teal-500">{text.xelyon}</p>
        </div>
        <div>
          <h4 className="font-semibold text-cyan-300 mb-1">{translations.englishLabel}</h4>
          <p className="text-slate-300 pl-4 border-l-2 border-cyan-500">{text.english}</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-400 mb-1">{translations.contextLabel}</h4>
          <p className="text-slate-400 text-sm pl-4 border-l-2 border-slate-600">{text.context}</p>
        </div>
      </div>
    </div>
  );
};

export const SampleTextsView: React.FC<SampleTextsViewProps> = ({ sampleTexts }) => {
  const { translations } = useLanguage();
  return (
    <div className="space-y-8">
      <h2 className="font-orbitron text-3xl font-bold text-indigo-400 text-center mb-6">
        {translations.sampleTexts}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleTexts.map((text, index) => (
          <SampleTextCard key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
