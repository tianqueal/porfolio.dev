import type { DropdownMenuConfig } from '@/utils/dropdown.types';

export class AccessibleDropdownMenu {
	private controller: AbortController | null = null;
	private currentIndex = -1;
	private config: DropdownMenuConfig;
	private button: HTMLElement | null = null;
	private menu: HTMLElement | null = null;
	private menuItems: NodeListOf<HTMLElement> | null = null;

	constructor(config: DropdownMenuConfig) {
		this.config = config;
	}

	init() {
		this.cleanup();
		this.controller = new AbortController();
		const { signal } = this.controller;

		this.button = document.getElementById(this.config.buttonId);
		this.menu = document.getElementById(this.config.menuId);

		if (!this.button || !this.menu) return;

		this.menuItems = this.menu.querySelectorAll(this.config.itemSelector);

		this.setupEventListeners(signal);
	}

	private setupEventListeners(signal: AbortSignal) {
		if (!this.button || !this.menu || !this.menuItems) return;

		document.addEventListener('click', () => this.closeMenu(), { signal });

		document.addEventListener('keydown', (e) => this.handleKeydown(e), { signal });

		this.button.addEventListener('click', (e) => this.handleButtonClick(e), { signal });

		this.menuItems.forEach((item, index) => {
			item.addEventListener('mouseenter', () => this.setActiveItem(index), { signal });
			item.addEventListener('click', () => this.handleItemClick(item, index), { signal });
		});
	}

	private handleKeydown(e: KeyboardEvent) {
		const isMenuOpen = this.menu?.classList.contains('open');

		if (e.key === 'Escape' && isMenuOpen) {
			this.closeMenu();
			this.button?.focus();
			return;
		}

		if (!isMenuOpen || !this.menuItems) return;

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				const nextIndex = this.currentIndex < this.menuItems.length - 1 ? this.currentIndex + 1 : 0;
				this.setActiveItem(nextIndex);
				break;

			case 'ArrowUp':
				e.preventDefault();
				const prevIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.menuItems.length - 1;
				this.setActiveItem(prevIndex);
				break;

			case 'Enter':
			case ' ':
				e.preventDefault();
				if (this.currentIndex >= 0 && this.menuItems[this.currentIndex]) {
					this.menuItems[this.currentIndex].click();
				}
				break;

			case 'Home':
				e.preventDefault();
				this.setActiveItem(0);
				break;

			case 'End':
				e.preventDefault();
				this.setActiveItem(this.menuItems.length - 1);
				break;
		}
	}

	private handleButtonClick(e: Event) {
		e.stopPropagation();

		if (this.config.siblingMenuId) {
			document.getElementById(this.config.siblingMenuId)?.classList.remove('open');
		}

		const isClosed = !this.menu?.classList.contains('open');

		if (isClosed) {
			this.openMenu();
		} else {
			this.closeMenu();
		}
	}

	private handleItemClick(item: HTMLElement, index: number) {
		this.config.onItemClick?.(item, index);
		this.closeMenu();
	}

	private setActiveItem(index: number) {
		if (!this.menuItems) return;

		this.menuItems.forEach((item) => {
			this.config.activeClasses.forEach((cls) => item.classList.remove(cls));
		});

		if (index >= 0 && index < this.menuItems.length) {
			this.currentIndex = index;
			this.config.activeClasses.forEach((cls) => {
				this.menuItems![this.currentIndex].classList.add(cls);
			});
			this.menuItems[this.currentIndex].focus();
		}
	}

	private openMenu() {
		this.menu?.classList.add('open');
		this.updateAriaExpanded(true);
		this.config.onMenuOpen?.();
		setTimeout(() => this.setActiveItem(0), 50);
	}

	private closeMenu() {
		this.menu?.classList.remove('open');
		this.updateAriaExpanded(false);
		this.currentIndex = -1;

		this.menuItems?.forEach((item) => {
			this.config.activeClasses.forEach((cls) => item.classList.remove(cls));
		});

		this.config.onMenuClose?.();
	}

	private updateAriaExpanded(isOpen: boolean) {
		this.button?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	}

	cleanup() {
		this.controller?.abort();
		this.controller = null;
	}
}
