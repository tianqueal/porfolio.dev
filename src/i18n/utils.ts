import { ui } from './ui';
import { DEFAULT_LANG, Language } from './languages';
import type { LanguageCode } from './languages';

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split('/') as [string, LanguageCode];
	if (lang && lang in ui) return lang as Language;
	return DEFAULT_LANG;
}

export function useT(lang: Language) {
	return function t(key: keyof (typeof ui)[Language.EN]) {
		return ui[lang][key] || ui[DEFAULT_LANG][key];
	};
}
