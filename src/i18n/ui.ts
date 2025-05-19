import en from '../locales/en.json';
import es from '../locales/es.json';

import { Language } from './languages';

type LocaleStrings = typeof en;

export const ui: Record<Language, LocaleStrings> = {
	en,
	es,
};
