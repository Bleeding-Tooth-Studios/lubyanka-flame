import { Atom, atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { MainMenuPages, UIScreens, UIState } from "shared/types/types.uitypes";

export const uiState = atom<UIState>({
	currentScreen: UIScreens.inGame,
	currentMainMenuPage: MainMenuPages.mainPage,
});
