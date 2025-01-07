import React from "@rbxts/react";
import { Figma } from "client/util/util.ui";

function FigmaText(
	props: React.PropsWithChildren<{
		size: Parameters<typeof Figma.size>;
	}>,
) {
	return <textlabel BorderSizePixel={0} BackgroundTransparency={1}></textlabel>;
}

export default FigmaText;
