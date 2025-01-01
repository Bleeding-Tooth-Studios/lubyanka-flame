import React, { InstanceProps, ReactNode } from "@rbxts/react";
import { HEALTH_BAR_BACKGROUND_SIZE } from "../uiconsts/uiconsts.health-bar";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { PADDING } from "../uiconsts/uiconsts.padding";

/**
 * HealthBar component
 * @param progress Percentage, represented as a float (0.0 - 1.0) to indicate how full the health bar is
 * @param rbx Properties of the health bar container
 * @returns HealthBar react node
 */
export default function HealthBar(props: {
	progress: number;
	rbx?: Omit<
		InstanceProps<TextLabel>,
		"BackgroundColor3" | "BackgroundTransparency" | "TextColor3" | "Size" | "Text"
	>;
}): ReactNode {
	return (
		<textlabel
			key={"HealthBarContainer"}
			{...props.rbx}
			Text={""}
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(0, 0, 0)}
			BackgroundTransparency={0.5}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			Size={HEALTH_BAR_BACKGROUND_SIZE}
		>
			<uipadding
				PaddingBottom={new UDim(0, PADDING.XS)}
				PaddingLeft={new UDim(0, PADDING.XS)}
				PaddingRight={new UDim(0, PADDING.XS)}
				PaddingTop={new UDim(0, PADDING.XS)}
			/>
			<imagelabel
				ZIndex={2}
				key={"HealthBarSplatterTexture"}
				BackgroundTransparency={1}
				Image={"rbxassetid://112547033494391"}
				AnchorPoint={ANCHORS.CENTER_BOTTOM}
				Position={POSITIONSCALES.CENTER_BOTTOM}
				Size={UDim2.fromScale(1, 1)}
				BorderSizePixel={0}
			/>
			<textlabel
				ZIndex={1}
				key={"HealthBar"}
				Text={""}
				AnchorPoint={ANCHORS.CENTER_BOTTOM}
				Position={POSITIONSCALES.CENTER_BOTTOM}
				BorderSizePixel={0}
				BackgroundColor3={Color3.fromRGB(255, 0, 0)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				Size={UDim2.fromScale(1, 1)}
			/>
		</textlabel>
	);
}
