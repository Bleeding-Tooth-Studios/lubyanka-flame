import { InstanceProps, ReactNode } from "@rbxts/react";
import React from "@rbxts/react";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { useTimer } from "@rbxts/pretty-react-hooks";
import { toBinding } from "@rbxts/pretty-react-hooks";
import { COLORS } from "../uiconsts/uiconsts.colors";

//formatSeconds(2,40) --> count down from 00:38
//formatSeconds(0,70) --> count down from 01:10
function formatSeconds(elapsedSeconds: number, totalSeconds: number): string {
	// Calculate remaining time
	const remainingTime = totalSeconds - elapsedSeconds;
	if (remainingTime < 0) {
		return "";
	}

	// Calculate minutes and seconds
	const minutes = math.floor(remainingTime / 60);
	const seconds = remainingTime % 60;

	// Format minutes and seconds with leading zeros
	const formattedMinutes = minutes < 10 ? "0" + minutes : tostring(minutes);
	const formattedSeconds = seconds < 10 ? "0" + seconds : tostring(seconds);

	return formattedMinutes + ":" + formattedSeconds;
}

export function TimerText(props: { totalSeconds: number }): ReactNode {
	const timer = useTimer();
	return (
		<textlabel
			key="TimerText"
			{...TEXT_STYLES.BODY}
			Text={timer.value.map((value) => formatSeconds(math.floor(value), props.totalSeconds))}
			BackgroundColor3={Color3.fromRGB(255, 0, 0)}
			TextColor3={timer.value.map((value) => {
				return props.totalSeconds - math.floor(value) <= 10 ? COLORS.RED : COLORS.WHITE;
			})}
			AnchorPoint={ANCHORS.CENTER_TOP}
			Position={POSITIONSCALES.CENTER_TOP}
			Visible={timer.value.map((value) => {
				return props.totalSeconds - math.floor(value) <= 0 ? false : true;
			})}
		/>
	);
}
