import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { ReactNode } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";
import { ScreenProps } from "client/types/types.uitypes";
import { createPadding } from "client/util/util.ui";
import { UIStateActions } from "client/util/util.uistate-actions";
import { PADDING } from "../uiconsts/uiconsts.padding";

export function MainMenuScreen(props: ScreenProps): ReactNode {
	const [fadeBinding, fadeMotion] = useMotion<number>(0);

	const currentPage = useAtom(() => {
		return props.uiState().currentMainMenuPage;
	});

	function fadeIn(speed: number) {
		fadeMotion.linear(0, { speed: speed });
	}

	function fadeOut(speed: number) {
		fadeMotion.linear(1, { speed: speed });
	}

	function fadeToPage(page: typeof currentPage, speed: number): void {
		fadeOut(speed);
		fadeMotion.onComplete((value) => {
			UIStateActions.goToMenuPage(props.uiState, page);
			fadeIn(speed);
		});
	}

	return (
		<canvasgroup
			GroupTransparency={fadeBinding}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Size={UDim2.fromScale(1, 1)}
		>
			{createPadding(PADDING.L)}
			{MAIN_MENU_PAGES[currentPage]({
				uiState: props.uiState,
				fadeToPage: fadeToPage,
			})}
		</canvasgroup>
	);
}
