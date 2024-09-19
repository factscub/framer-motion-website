export interface ILink {
	urlPath: string;
	name: string;
}

export interface LinksProps {
	data: ILink[];
	heading: string;
}

export interface PricingCardProps {
	label: string;
	id: number;
	description: string;
	price: string;
	validity: string;
}

export interface SideMenuButtonProps {
	isActive: boolean;
	toggleMenu(): void;
}

export interface IPosition {
	left: number;
	width: number;
	opacity: number;
}

export interface CursorProps {
	position: IPosition;
}

export interface SingleLinkProps {
	linkData: ILink;
	setPosition: (position: IPosition) => void;
}

export interface VideoState {
	isPlaying: boolean;
	mouseEntered: boolean;
}

export type VideoAction =
	| { type: "PLAY" }
	| { type: "PAUSE" }
	| { type: "MOUSE_ENTERED" }
	| { type: "MOUSE_LEFT" };
