export interface DropdownMenuConfig {
	buttonId: string;
	menuId: string;
	itemSelector: string;
	activeClasses: string[];
	onItemClick?: (item: HTMLElement, index: number) => void;
	onMenuOpen?: () => void;
	onMenuClose?: () => void;
	siblingMenuId?: string;
}
