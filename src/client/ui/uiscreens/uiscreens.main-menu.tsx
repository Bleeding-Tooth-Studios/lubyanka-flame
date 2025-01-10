import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { ReactNode } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";
import { ScreenProps } from "client/types/types.uitypes";
import { createPadding } from "client/util/util.ui";
import { UIStateActions } from "client/util/util.uistate-actions";
import { PADDING } from "../uiconsts/uiconsts.padding";
import FigmaCanvas from "../uicomponents/FigmaCanvas";

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
		<FigmaCanvas
			size={["Fill", "Fill"]}
			rbx={{
				GroupTransparency: fadeBinding,
			}}
		>
			{MAIN_MENU_PAGES[currentPage]({
				uiState: props.uiState,
				fadeToPage: fadeToPage,
			})}
		</FigmaCanvas>
	);
}
