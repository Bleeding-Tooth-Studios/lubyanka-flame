import React, { InstanceProps } from "@rbxts/react";
import { FigmaTextProps } from "client/types/types.uitypes";
import { Figma } from "client/util/util.ui";

function FigmaTextButton(props: FigmaTextProps<TextButton>) {
	const { children, rbx, size, align } = props;

	return (
		<textbutton
			{...rbx}
			{...Figma.size(...(size ?? ["Hug", "Hug"]))}
			{...Figma.textAlign(...(align ?? ["Left", "Top"]))}
			BackgroundTransparency={1}
			BorderSizePixel={0}
		>
			{children}
		</textbutton>
	);
}

export default FigmaTextButton;
