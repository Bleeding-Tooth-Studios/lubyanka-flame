import { Atom } from "@rbxts/charm";
import { SubtitleData } from "../../shared/types/types.subtitle";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";
import { UI_SCREENS } from "client/consts/consts.uiscreens";

export type TextStyle = Pick<React.InstanceProps<TextLabel>, "FontSize" | "FontFace">;

export type ScreenProps = {
	subtitlesQueue: Atom<SubtitleData[]>;
	uiState: Atom<UIState>;
};

export type MainMenuPageProps = {
	uiState: Atom<UIState>;
	fadeToPage: (page: keyof typeof MAIN_MENU_PAGES, speed: number) => void;
};

export type UIState = {
	currentScreen: keyof typeof UI_SCREENS;
	currentMainMenuPage: keyof typeof MAIN_MENU_PAGES;
};
