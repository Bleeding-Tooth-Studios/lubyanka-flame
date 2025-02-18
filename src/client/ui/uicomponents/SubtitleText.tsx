import React, { InstanceProps, ReactNode } from "@rbxts/react";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { Figma } from "client/util/util.ui";
import { UIUTILS } from "../uiconsts/uiconsts.util";

export function SubtitleText(props: InstanceProps<TextLabel>): ReactNode {
	return (
		<textlabel
			{...props}
			{...Figma.size("Hug", "Hug")}
			{...TEXT_STYLES.BODY}
			{...UIUTILS.NOBORDER}
			{...UIUTILS.NOBACKGROUND}
			{...Figma.textAlign("Left", "Center")}
			RichText={true}
		/>
	);
}
