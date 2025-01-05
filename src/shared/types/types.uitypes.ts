import { Atom } from "@rbxts/charm";
import { SubtitleData } from "./types.subtitle";

export type TextStyle = Pick<React.InstanceProps<TextLabel>, "FontSize" | "FontFace">;

export type ScreenProps = {
	uiScreenState: Atom<UIScreens>;
	uiMenuPageState: Atom<MainMenuPages>;
	subtitlesQueue: Atom<SubtitleData[]>;
};

export type ScreenPageProps = {};

export type MainMenuPageProps = {};

export enum UIScreens {
	inGame,
	mainMenu,
}

export enum MainMenuPages {
	mainPage,
	keybindsPage,
	creditsPage,
}

export type UIState = {
	currentScreen: number;
	currentMainMenuPage: MainMenuPages;
};
