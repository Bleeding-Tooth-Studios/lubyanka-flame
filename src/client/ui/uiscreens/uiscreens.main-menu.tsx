import React from "@rbxts/react";
import { ReactNode } from "@rbxts/react";
import { ScreenProps } from "shared/types/types.uitypes";
import { PADDING } from "../uiconsts/uiconsts.padding";

export function MainMenu(props: ScreenProps): ReactNode {
	return (
		<frame
			key={"MainPage"}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Position={UDim2.fromOffset(PADDING.L, PADDING.L)}
			Size={new UDim2(1, -PADDING.L * 2, 1, -PADDING.L * 2)}
		></frame>
	);
}
