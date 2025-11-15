
import React from 'react';
import type { GrammarRule } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface GrammarViewProps {
  grammar: GrammarRule[];
}

export const GrammarView: React.FC<GrammarViewProps> = ({ grammar }) => {
  const { translations } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-800/50 rounded-lg border border-slate-700">
      <h2 className="font-orbitron text-3xl font-bold text-indigo-400 mb-6 border-b-2 border-slate-600 pb-2">
        {translations.grammarSystem}
      </h2>
      <div className="space-y-8">
        {grammar.map((section, index) => (
          <div key={index}>
            <h3 className="font-orbitron text-xl text-slate-100 mb-3">{section.title}</h3>
            <div className="pl-4 border-l-2 border-indigo-500 space-y-2">
              {section.rules.map((rule, ruleIndex) => (
                 <p key={ruleIndex} className="text-slate-300">
                   {rule.includes(':') ? (
                     <>
                       <span className="font-semibold text-teal-300">{rule.split(':')[0]}:</span>
                       {rule.split(':').slice(1).join(':')}
                     </>
                   ) : (
                     rule
                   )}
                 </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
