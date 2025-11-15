
import React, { useState, useCallback, useMemo } from 'react';
import { GoogleGenAI } from '@google/genai';
import { rawXelyonGuide } from '../data/xelyonData';
import { XIcon } from './icons/XIcon';
import { TranslateIcon } from './icons/TranslateIcon';
import type { WritingSystem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TranslationModalProps {
  isOpen: boolean;
  onClose: () => void;
  writingSystem: WritingSystem;
}

export const TranslationModal: React.FC<TranslationModalProps> = ({ isOpen, onClose, writingSystem }) => {
  const [mode, setMode] = useState<'translate' | 'transliterate'>('translate');
  const { translations } = useLanguage();
  
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transliterateInput, setTransliterateInput] = useState('');

  const { glyphMap, multiCharKeys } = useMemo(() => {
    const map = new Map<string, string>();
    const multiKeys: string[] = [];
    const allGlyphSections = [
        writingSystem.consonants,
        writingSystem.vowels,
        writingSystem.glottalBreak,
    ];

    for (const section of allGlyphSections) {
        if (!section) continue;
        for (const glyph of section.glyphs) {
            let charKey = glyph.char;
            if (charKey === '◆') {
                map.set("'", glyph.glyph);
                map.set("’", glyph.glyph);
                continue;
            }
            
            const lowerCharKey = charKey.toLowerCase();
            map.set(lowerCharKey, glyph.glyph);

            if (lowerCharKey.length > 1) {
                multiKeys.push(lowerCharKey);
            }
        }
    }
    multiKeys.sort((a, b) => b.length - a.length);
    return { glyphMap: map, multiCharKeys: multiKeys };
  }, [writingSystem]);

  const transliterateToLumek = useCallback((text: string): string => {
    if (!text || !glyphMap.size) return '';
    
    let transliteratedText = '';
    let i = 0;
    const lowerText = text.toLowerCase();

    while (i < lowerText.length) {
        let matched = false;
        for (const key of multiCharKeys) {
            if (lowerText.substring(i, i + key.length) === key) {
                transliteratedText += glyphMap.get(key) || text.substring(i, i + key.length);
                i += key.length;
                matched = true;
                break;
            }
        }
        
        if (!matched) {
            const char = lowerText[i];
            transliteratedText += glyphMap.get(char) || text[i];
            i++;
        }
    }
    return transliteratedText;
  }, [glyphMap, multiCharKeys]);

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) return;

    setError(null);
    setIsLoading(true);
    setResult('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Given the complete guide to the Xelyon language below, translate the following English text into Xelyon. Only return the translated Xelyon text, with no extra explanation or formatting.
---
XELYON LANGUAGE GUIDE:
${rawXelyonGuide}
---
ENGLISH TEXT TO TRANSLATE:
"${inputText}"
`,
      });
      setResult(response.text);
    } catch (e) {
      console.error(e);
      setError(translations.translationError);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, translations.translationError]);

  const resetState = useCallback(() => {
    setInputText('');
    setResult('');
    setTransliterateInput('');
    setIsLoading(false);
    setError(null);
  }, []);

  const handleModeChange = useCallback((newMode: 'translate' | 'transliterate') => {
    if (mode !== newMode) {
      resetState();
      setMode(newMode);
    }
  }, [mode, resetState]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <TranslateIcon className="w-6 h-6 text-indigo-400" />
            <h2 className="font-orbitron text-xl text-white">{translations.modalTitle}</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <XIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="flex p-2 bg-slate-900 border-b border-slate-700 flex-shrink-0">
          <button
            onClick={() => handleModeChange('translate')}
            className={`flex-1 py-2 text-center rounded-md transition-colors text-sm font-medium ${mode === 'translate' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            {translations.translateToXelyon}
          </button>
          <button
            onClick={() => handleModeChange('transliterate')}
            className={`flex-1 py-2 text-center rounded-md transition-colors text-sm font-medium ${mode === 'transliterate' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-300 hover:bg-slate-700'}`}
          >
            {translations.transliterateToLumek}
          </button>
        </div>
        
        <div className="flex-grow min-h-0">
          {mode === 'translate' && (
            <div className="flex flex-col h-full">
              <div className="p-6 space-y-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={translations.translatePlaceholder}
                  className="w-full h-32 p-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  disabled={isLoading}
                />
                <button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      <span>{translations.translatingButton}</span>
                    </>
                  ) : (
                    translations.translateButton
                  )}
                </button>
              </div>
              
              {(result || isLoading || error) && (
                <div className="p-6 border-t border-slate-700 bg-slate-900/50 flex-grow flex flex-col min-h-0">
                   <h3 className="font-orbitron text-lg text-slate-200 mb-3">{translations.result}</h3>
                   {error && <p className="text-red-400">{error}</p>}
                   {isLoading && !result && <p className="text-slate-400">{translations.generatingTranslation}</p>}
                   {result && (
                      <div className="space-y-4 overflow-y-auto">
                          <div>
                              <h4 className="font-semibold text-teal-300 mb-1">{translations.xelyonText}</h4>
                              <p className="text-slate-300 italic p-3 bg-slate-800 rounded-md">{result}</p>
                          </div>
                          <div>
                              <h4 className="font-semibold text-cyan-300 mb-1">{translations.lumekScriptResult}</h4>
                              <p className="text-4xl text-teal-300 font-orbitron p-3 bg-slate-800 rounded-md break-words leading-relaxed">
                                  {transliterateToLumek(result)}
                              </p>
                          </div>
                      </div>
                   )}
                </div>
              )}
            </div>
          )}

          {mode === 'transliterate' && (
            <div className="p-6 space-y-4 flex flex-col h-full">
              <textarea
                  value={transliterateInput}
                  onChange={(e) => setTransliterateInput(e.target.value)}
                  placeholder={translations.transliteratePlaceholder}
                  className="w-full h-32 p-3 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none flex-shrink-0"
              />
              <div className="flex-grow flex flex-col min-h-0">
                  <h3 className="font-orbitron text-lg text-slate-200 mb-3 flex-shrink-0">{translations.lumekScriptResultTitle}</h3>
                  <div className="p-4 bg-slate-900 rounded-lg overflow-y-auto border border-slate-700 flex-grow">
                      <p className="text-4xl text-teal-300 font-orbitron break-words leading-relaxed">
                          {transliterateInput ? transliterateToLumek(transliterateInput) : <span className="text-slate-500 text-2xl">...</span>}
                      </p>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
