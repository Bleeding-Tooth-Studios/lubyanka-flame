import React, { ReactNode } from "@rbxts/react";
import { ScreenProps } from "client/types/types.uitypes";
import HealthBar from "../uicomponents/HealthBar";
import { SubtitleBox } from "../uicomponents/SubtitleBox";
import { PADDING } from "../uiconsts/uiconsts.padding";
import { ANCHORS, POSITIONSCALES, UIUTILS } from "../uiconsts/uiconsts.util";
import { TimerText } from "../uicomponents/Timer";
import { Figma } from "client/util/util.ui";

export function InGameScreen(props: ScreenProps): ReactNode {
	const { subtitlesQueue: subtitles } = props;

	return (
		<frame key={"MainFrame"} {...Figma.size("Fill", "Fill")} {...UIUTILS.NOBACKGROUND}>
			{Figma.createPad(PADDING.L, PADDING.L)}

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
