import React, { ReactNode } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { ScreenProps } from "client/types/types.uitypes";
import PaddedFrame from "../uicomponents/PaddedFrame";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { PADDING } from "../uiconsts/uiconsts.padding";
import { MAIN_MENU_PAGES } from "client/consts/consts.menu-pages";

export function MainMenuScreen(props: ScreenProps): ReactNode {
	const uiState = useAtom(() => {
		return props.uiState().currentMainMenuPage;
	});

	return (
		<PaddedFrame
			rbx={{
				BackgroundTransparency: 0,
				BackgroundColor3: COLORS.BLACK,
			}}
			paddingSize={PADDING.L}
		>
			{MAIN_MENU_PAGES[uiState]({})}
		</PaddedFrame>
	);
}
