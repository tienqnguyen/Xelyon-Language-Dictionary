export type ViewType = 'dictionary' | 'grammar' | 'writing-system' | 'sample-texts';

export interface DictionaryEntry {
  word: string;
  translation: string;
  category: string;
  pronunciation: string;
  phonetic: string;
}

export interface GrammarRule {
  title: string;
  rules: string[];
}

export interface Glyph {
  char: string;
  glyph: string;
  example: {
    word: string;
    translation: string;
  } | null;
}

export interface WritingSystemSection {
  title: string;
  glyphs: Glyph[];
}

export interface WritingSystem {
  consonants: WritingSystemSection;
  vowels: WritingSystemSection;
  glottalBreak: WritingSystemSection;
  numerals: WritingSystemSection;
  sacred: WritingSystemSection;
}

export interface SampleText {
  title: string;
  xelyon: string;
  english: string;
  context: string;
}

export interface XelyonData {
  dictionary: DictionaryEntry[];
  grammar: GrammarRule[];
  writingSystem: WritingSystem;
  sampleTexts: SampleText[];
}