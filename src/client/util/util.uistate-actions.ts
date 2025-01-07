import { Atom } from "@rbxts/charm";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";
import { UI_SCREENS } from "client/consts/consts.uiscreens";
import { UIState } from "client/types/types.uitypes";

export namespace UIStateActions {
	export function goToScreen(uiStateAtom: Atom<UIState>, screen: keyof typeof UI_SCREENS) {
		return uiStateAtom((prev) => {
			const copy = table.clone(prev);

			copy.currentScreen = screen;

			return copy;
		});
	}

	export function goToMenuPage(uiStateAtom: Atom<UIState>, page: keyof typeof MAIN_MENU_PAGES) {
		return uiStateAtom((prev) => {
			const copy = table.clone(prev);

			copy.currentMainMenuPage = page;

			return copy;
		});
	}
}
