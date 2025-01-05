import React, { ReactNode } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { MainMenuPagesMap } from "client/consts/consts.uistates";
import { ScreenProps } from "shared/types/types.uitypes";
import PaddedFrame from "../uicomponents/PaddedFrame";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { PADDING } from "../uiconsts/uiconsts.padding";

export function MainMenuScreen(props: ScreenProps): ReactNode {
	const currentPage = useAtom(props.uiMenuPageState);

	return (
		<PaddedFrame
			rbx={{
				BackgroundTransparency: 0,
				BackgroundColor3: COLORS.BLACK,
			}}
			paddingSize={PADDING.L}
		>
			{MainMenuPagesMap[currentPage]({})}
		</PaddedFrame>
	);
}
