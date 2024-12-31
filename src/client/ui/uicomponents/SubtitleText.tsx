import { InstanceProps, ReactNode } from "@rbxts/react";
import { SubtitleData } from "shared/types/types.subtitle";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { setInterval, setTimeout } from "@rbxts/set-timeout";
import React from "@rbxts/react";

export function SubtitleText(props: InstanceProps<TextLabel>): ReactNode {
	return (
		<textlabel
			{...props}
			{...TEXT_STYLES.MEDIUM}
			RichText={true}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			AutomaticSize={"XY"}
			TextYAlignment={"Center"}
		/>
	);
}
