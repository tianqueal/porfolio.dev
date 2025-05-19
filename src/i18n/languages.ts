export enum Language {
	EN = 'en',
	ES = 'es',
}

/**
 * label: Full name
 * iso: ISO standard code
 * locale: Region Code ("en-US", "es-ES", "ru-RU")
 * dir: Language writing direction
 * shortLabel: Abbreviation in its own official language
 */
export type LanguageData = {
	label: string;
	iso: string;
	locale: string;
	dir?: 'ltr' | 'rtl';
	shortLabel?: string;
};

export const LANGUAGES: Record<Language, LanguageData> = {
	[Language.EN]: {
		label: 'English',
		iso: 'en',
		locale: 'en-US',
		dir: 'ltr',
		shortLabel: 'en',
	},
	[Language.ES]: {
		label: 'Español',
		iso: 'es',
		locale: 'es-ES',
		dir: 'ltr',
		shortLabel: 'es',
	},
};

export const DEFAULT_LANG = Language.EN;

export type LanguageCode = `${Language}`;
