export type Languages = 'en' | 'el' | 'ru';

export const supportedLanguages = ['en', 'el', 'ru'] as const;

export type LanguageLocales = { Languages: string };
