export const availableLocales = ['en', 'pl'] as const;

export type SupportedLocales = typeof availableLocales[number];

export const localesMap: { [key: string]: { flag: string; name: string; nativeName: string } } = {
    en: {
        flag: 'US',
        name: 'English',
        nativeName: 'English',
    },
    es: {
        flag: 'ES',
        name: 'Spanish',
        nativeName: 'Español',
    },
    de: {
        flag: 'DE',
        name: 'German',
        nativeName: 'Deutsch',
    },
    fr: {
        flag: 'FR',
        name: 'French',
        nativeName: 'Français',
    },
    it: {
        flag: 'IT',
        name: 'Italian',
        nativeName: 'Italiano',
    },
    no: {
        flag: 'NO',
        name: 'Norwegian',
        nativeName: 'Norsk',
    },
    pl: {
        flag: 'PL',
        name: 'Polish',
        nativeName: 'Polski',
    },
    ru: {
        flag: 'RU',
        name: 'Russian',
        nativeName: 'Pусский язык',
    },
    tr: {
        flag: 'TR',
        name: 'Turkish',
        nativeName: 'Türkçe',
    },
    zh: {
        flag: 'ZH',
        name: 'Chinese',
        nativeName: '中文, 汉语, 漢語',
    },
};
