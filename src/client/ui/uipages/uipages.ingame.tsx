import { PropsWithChildren, ReactNode } from "@rbxts/react";
import { PADDING } from "../uiconsts/uiconsts.padding";
import React from "@rbxts/react";
import HealthBar from "../uicomponents/HealthBar";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { SubtitleBox, SubtitleBoxProps } from "../uicomponents/SubtitleBox";
import { SubtitleData } from "shared/types/types.subtitle";
import { Atom } from "@rbxts/charm";
import { TimerText } from "../uicomponents/Timer";
import { timerSeconds } from "client/states/states.time";


export type InGamePageProps = { healthProgress: number; subtitlesQueue: Atom<SubtitleData[]>, timerSeconds: number};
export function InGamePage(props: InGamePageProps): ReactNode {
	const { healthProgress, subtitlesQueue: subtitles, timerSeconds } = props;

	return (
		<frame
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Position={UDim2.fromOffset(PADDING.L, PADDING.L)}
			Size={new UDim2(1, -PADDING.L * 2, 1, -PADDING.L * 2)}
		>
			<SubtitleBox subtitlesQueue={subtitles} />
			<HealthBar
				progress={healthProgress}
				rbx={{
					Position: POSITIONSCALES.LEFT_BOTTOM,
					AnchorPoint: ANCHORS.LEFT_BOTTOM,
				}}
			/>
			<TimerText totalSeconds={timerSeconds}/>
		</frame>
	);
}
