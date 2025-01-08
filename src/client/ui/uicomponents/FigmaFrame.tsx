import React, { InstanceProps } from "@rbxts/react";
import { Figma } from "client/util/util.ui";

function FigmaFrame(
	props: React.PropsWithChildren<{
		size: Parameters<typeof Figma.size>;
		autoLayout: Parameters<typeof Figma.autoLayout>;
		pad?: Parameters<typeof Figma.pad>;
		rbx?: InstanceProps<Frame>;
	}>,
) {
	return (
		<frame {...props.rbx} key={"FigmaFrame"} {...Figma.size(...props.size)} BackgroundTransparency={1}>
			<uilistlayout SortOrder={"LayoutOrder"} {...Figma.autoLayout(...props.autoLayout)} />
			{props.pad ? Figma.pad(...props.pad) : undefined}
			{props.children}
		</frame>
	);
}

export default FigmaFrame;
