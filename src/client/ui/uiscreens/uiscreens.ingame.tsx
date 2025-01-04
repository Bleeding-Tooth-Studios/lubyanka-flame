import { PropsWithChildren, ReactNode } from "@rbxts/react";
import { PADDING } from "../uiconsts/uiconsts.padding";
import React from "@rbxts/react";
import HealthBar from "../uicomponents/HealthBar";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { SubtitleBox, SubtitleBoxProps } from "../uicomponents/SubtitleBox";
import { SubtitleData } from "shared/types/types.subtitle";
import { Atom } from "@rbxts/charm";
import { ScreenProps } from "shared/types/types.uitypes";

export function InGameScreen(props: ScreenProps): ReactNode {
	const { subtitlesQueue: subtitles } = props;

	return (
		<frame
			key={"MainFrame"}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Position={UDim2.fromOffset(PADDING.L, PADDING.L)}
			Size={new UDim2(1, -PADDING.L * 2, 1, -PADDING.L * 2)}
		>
			<SubtitleBox subtitlesQueue={subtitles} />
			<HealthBar
				progress={100}
				rbx={{
					Position: POSITIONSCALES.LEFT_BOTTOM,
					AnchorPoint: ANCHORS.LEFT_BOTTOM,
				}}
			/>
		</frame>
	);
}
