import React from "@rbxts/react";
import { FigmaProps } from "client/types/types.uitypes";
import { Figma } from "client/util/util.ui";
import FigmaGeneric from "./FigmaGeneric";

function FigmaCanvas(props: FigmaProps<CanvasGroup>) {
	const { autoLayout, children, pad, rbx, size } = props;

	return (
		<canvasgroup
			{...rbx}
			key={"FigmaFrame"}
			{...(size && Figma.size(...size))}
			BackgroundTransparency={1}
			BorderSizePixel={0}
		>
			{autoLayout && Figma.createAutoLayout(...autoLayout)}
			{pad && Figma.createPad(...pad)}
			{children}
		</canvasgroup>
	);
}

export default FigmaCanvas;
