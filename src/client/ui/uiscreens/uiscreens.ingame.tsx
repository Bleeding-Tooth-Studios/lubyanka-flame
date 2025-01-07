import React, { ReactNode } from "@rbxts/react";
import { ScreenProps } from "client/types/types.uitypes";
import HealthBar from "../uicomponents/HealthBar";
import { SubtitleBox } from "../uicomponents/SubtitleBox";
import { PADDING } from "../uiconsts/uiconsts.padding";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { TimerText } from "../uicomponents/Timer";

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

			<TimerText totalSeconds={15} />
		</frame>
	);
}
