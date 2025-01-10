import React, { InstanceProps } from "@rbxts/react";
import { Figma } from "client/util/util.ui";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { FigmaTextProps } from "client/types/types.uitypes";

function FigmaText(props: FigmaTextProps<TextLabel>) {
	const { children, rbx, size, font_style } = props;

	return (
		<textlabel
			BackgroundTransparency={1}
			BorderSizePixel={0}
			{...rbx}
			{...Figma.size(...(size ?? ["Hug", "Hug"]))}
			{...(font_style && TEXT_STYLES[font_style])}
		>
			{children}
		</textlabel>
	);
}

export default FigmaText;
