export enum Theme {
	LightTheme = "light_theme",
	DarkTheme = "dark_theme",
}

export enum ThemeStoreEvent {
	ThemeChanged = "theme_changed",
}

export default class ThemeStore extends EventTarget {
	private static internalInstance: ThemeStore;
	private activeTheme: Theme = Theme.DarkTheme;

	public static get instance(): ThemeStore {
		if (!ThemeStore.internalInstance) {
			ThemeStore.internalInstance = new ThemeStore();
		}
		return ThemeStore.internalInstance;
	}

	public initialize(): void {
		this.setActiveTheme(this.activeTheme);
	}

	public getActiveTheme(): Theme {
		return this.activeTheme;
	}

	public setActiveTheme(newTheme: Theme): void {
		const html = document.querySelector("html");
		if (html) html.dataset.theme = newTheme;
		this.activeTheme = newTheme;
		this.dispatchEvent(new Event(ThemeStoreEvent.ThemeChanged));
	}
}
