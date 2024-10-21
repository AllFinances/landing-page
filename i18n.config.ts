import en from "./app/locales/en-us.json";
import lv from "./app/locales/lv-lv.json";

export default defineI18nConfig(() => ({
	legacy: false,
	globalInjection: true,
	messages: {
		en: en,
		lv: lv,
	},
}));
