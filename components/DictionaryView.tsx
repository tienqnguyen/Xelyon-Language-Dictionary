
import React, { useState, useMemo } from 'react';
import type { DictionaryEntry } from '../types';
import { SearchIcon } from './icons/SearchIcon';
import { SpeakerIcon } from './icons/SpeakerIcon';
import { useLanguage } from '../contexts/LanguageContext';

interface DictionaryViewProps {
  dictionary: DictionaryEntry[];
}

const DictionaryCard: React.FC<{ entry: DictionaryEntry }> = ({ entry }) => {
  const { translations } = useLanguage();
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(entry.word);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  return (
    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-1">
          <p className="font-orbitron text-lg text-indigo-400 break-words pr-2">{entry.word}</p>
          <button
            onClick={handleSpeak}
            className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 flex-shrink-0"
            aria-label={`${translations.pronounce} ${entry.word}`}
            title={`${translations.pronounce} ${entry.word}`}
          >
            <SpeakerIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2 mb-2">
            {entry.pronunciation && <p className="text-sm text-cyan-400/70 italic">{entry.pronunciation}</p>}
            {entry.phonetic && <p className="text-sm text-teal-300/80 font-mono">{entry.phonetic}</p>}
        </div>
        <p className="text-slate-300">{entry.translation}</p>
      </div>
      <p className="text-xs text-slate-500 mt-3 uppercase tracking-wider self-start">{entry.category}</p>
    </div>
  );
};


export const DictionaryView: React.FC<DictionaryViewProps> = ({ dictionary }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { translations } = useLanguage();

  const categories = useMemo(() => 
    ['all', ...Array.from(new Set(dictionary.map(entry => entry.category)))], 
    [dictionary]
  );

  const filteredEntries = useMemo(() => {
    return dictionary.filter(entry => {
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        entry.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
        entry.translation.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [dictionary, searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="bg-slate-800/60 p-4 rounded-xl sticky top-20 z-5 backdrop-blur-sm border border-slate-700">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder={translations.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-slate-400" />
                </div>
            </div>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-900 border border-slate-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all md:w-1/4"
            >
                {categories.map(cat => (
                    <option key={cat} value={cat}>{cat === 'all' ? translations.allCategories : cat}</option>
                ))}
            </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredEntries.map((entry, index) => (
          <DictionaryCard key={`${entry.word}-${index}`} entry={entry} />
        ))}
      </div>
      {filteredEntries.length === 0 && (
        <div className="text-center py-10">
          <p className="text-slate-400">{translations.noEntriesFound}</p>
        </div>
      )}
    </div>
  );
};
