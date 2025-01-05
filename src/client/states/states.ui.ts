import { Atom, atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { MainMenuPages, UIScreens, UIState } from "shared/types/types.uitypes";

export const uiScreenState: Atom<UIScreens> = atom<UIScreens>(UIScreens.mainMenu);

export const menuPageState: Atom<MainMenuPages> = atom<MainMenuPages>(MainMenuPages.mainPage);
