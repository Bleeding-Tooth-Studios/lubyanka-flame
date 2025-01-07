import { Atom, atom } from "@rbxts/charm";
import { UIState } from "client/types/types.uitypes";

export const uiState: Atom<UIState> = atom<UIState>({
	currentMainMenuPage: "MAIN_PAGE",
	currentScreen: "MAIN_MENU",
});
