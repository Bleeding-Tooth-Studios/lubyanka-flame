import { Atom } from "@rbxts/charm";
import { SubtitleData } from "../../shared/types/types.subtitle";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";
import { UI_SCREENS } from "client/consts/consts.uiscreens";
import { InstanceProps, PropsWithChildren } from "@rbxts/react";
import { TEXT_STYLES } from "client/ui/uiconsts/uiconsts.textstyles";
import { Figma } from "client/util/util.ui";

export type TextStyle = Pick<React.InstanceProps<TextLabel>, "FontFace" | "TextSize" | "LineHeight">;

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

export type FigmaProps<T extends GuiObject> = PropsWithChildren<{
	rbx?: InstanceProps<T>;
	size?: Parameters<typeof Figma.size>;
	pad?: Parameters<typeof Figma.createPad>;
	autoLayout?: Parameters<typeof Figma.createAutoLayout>;
}>;

export type FigmaTextProps<T extends GuiObject> = FigmaProps<T> & {
	font_style?: keyof typeof TEXT_STYLES;
	align?: Parameters<typeof Figma.textAlign>;
};
