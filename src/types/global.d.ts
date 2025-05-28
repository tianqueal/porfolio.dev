declare global {
	interface Window {
		getThemePreference: () => string;
	}
}

export {};
