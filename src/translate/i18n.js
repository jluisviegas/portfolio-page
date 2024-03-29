import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { messages } from './languages';

i18next.use(detector).init({
	debug: false,
	defaultNS: ['translations'],
	fallbackLng: 'pt',
	ns: ['translations'],
	resources: messages,
});

export { i18next };
