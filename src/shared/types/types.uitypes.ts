import { Atom } from "@rbxts/charm";
import { SubtitleData } from "./types.subtitle";

export type TextStyle = Pick<React.InstanceProps<TextLabel>, "FontSize" | "FontFace">;

export type ScreenProps = { subtitlesQueue: Atom<SubtitleData[]> };

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
	currentMainMenuPage: number;
};
