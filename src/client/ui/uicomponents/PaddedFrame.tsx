import React from "@rbxts/react";
import { PADDING } from "../uiconsts/uiconsts.padding";
import { createPadding } from "client/util/util.ui";

function PaddedFrame(props: React.PropsWithChildren<{ paddingSize: number; rbx?: React.InstanceProps<Frame> }>) {
	return (
		<frame
			key={"PaddedFrame"}
			Size={UDim2.fromScale(1, 1)}
			BackgroundTransparency={1}
			Transparency={1}
			BorderSizePixel={0}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={UDim2.fromScale(0.5, 0.5)}
			{...props.rbx}
		>
			{createPadding(props.paddingSize)}
			{props.children}
		</frame>
	);
}

export default PaddedFrame;
