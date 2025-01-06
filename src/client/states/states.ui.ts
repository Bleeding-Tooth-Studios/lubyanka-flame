import { atom } from "@rbxts/charm";
import { UIState } from "client/types/types.uitypes";

export const uiState = atom<UIState>({
	currentMainMenuPage: "MAIN_PAGE",
	currentScreen: "MAIN_MENU",
});
