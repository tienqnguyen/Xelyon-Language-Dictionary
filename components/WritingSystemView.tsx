
import React from 'react';
import type { WritingSystem, WritingSystemSection } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakerIcon } from './icons/SpeakerIcon';

interface WritingSystemViewProps {
  writingSystem: WritingSystem;
}

const GlyphTable: React.FC<{ section: WritingSystemSection }> = ({ section }) => {
  const { translations } = useLanguage();

  const handleSpeak = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-slate-700 h-full">
      <h3 className="font-orbitron text-xl text-indigo-400 mb-4 border-b border-slate-600 pb-2">{section.title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {section.glyphs.map((g, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-between min-h-[130px] p-2 bg-slate-900 rounded-lg border border-slate-700 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-default"
            title={`${g.char}${g.example ? ` - Example: ${g.example.word}` : ''}`}
          >
            <div className="relative w-full flex flex-col items-center justify-center flex-grow pt-2">
              <span className="text-4xl text-teal-300 font-orbitron">{g.glyph}</span>
              <span className="text-sm text-slate-400 font-mono mt-1">{g.char}</span>
              {g.example && (
                <button
                    onClick={(e) => handleSpeak(e, g.example!.word)}
                    className="absolute top-0 right-0 text-slate-400 hover:text-indigo-400 transition-colors duration-200 p-1"
                    aria-label={`${translations.pronounce} ${g.example.word}`}
                    title={`${translations.pronounce} ${g.example.word}`}
                >
                    <SpeakerIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            {g.example && (
              <div className="w-full pt-2 mt-2 border-t border-slate-700 text-center">
                <p className="text-xs text-indigo-300 truncate" title={g.example.word}>{g.example.word}</p>
                <p className="text-[10px] text-slate-500 truncate" title={g.example.translation}>{g.example.translation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export const WritingSystemView: React.FC<WritingSystemViewProps> = ({ writingSystem }) => {
  const { translations } = useLanguage();
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-orbitron text-3xl font-bold text-indigo-400 mb-2">
          {translations.lumekScript}
        </h2>
        <p className="max-w-3xl mx-auto text-slate-400">
          {translations.lumekScriptDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
            {writingSystem.consonants && <GlyphTable section={writingSystem.consonants} />}
            {writingSystem.vowels && <GlyphTable section={writingSystem.vowels} />}
        </div>
        <div className="space-y-8">
            {writingSystem.numerals && <GlyphTable section={writingSystem.numerals} />}
            {writingSystem.sacred && <GlyphTable section={writingSystem.sacred} />}
            {writingSystem.glottalBreak && <GlyphTable section={writingSystem.glottalBreak} />}
        </div>
      </div>
    </div>
  );
};