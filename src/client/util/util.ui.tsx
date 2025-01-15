import React, { Children, InstanceProps, ReactNode } from "@rbxts/react";

export function createPadding(size: number): ReactNode {
	return (
		<uipadding
			PaddingBottom={new UDim(0, size)}
			PaddingLeft={new UDim(0, size)}
			PaddingRight={new UDim(0, size)}
			PaddingTop={new UDim(0, size)}
		/>
	);
}

export namespace Figma {
	export type SizeMode = "Fill" | "Hug" | number;

	export function size(width: SizeMode, height: SizeMode): Pick<InstanceProps<GuiObject>, "Size" | "AutomaticSize"> {
		return {
			AutomaticSize:
				width === "Hug" && height === "Hug" ? "XY" : width === "Hug" ? "X" : height === "Hug" ? "Y" : "None",
			Size: new UDim2(
				width === "Fill" ? 1 : 0,
				width === "Fill" || width === "Hug" ? 0 : width,
				height === "Fill" ? 1 : 0,
				width === "Fill" || width === "Hug" ? 0 : width,
			),
		};
	}

	export function pad(
		sizeX: number,
		sizeY: number,
	): Pick<InstanceProps<UIPadding>, "PaddingTop" | "PaddingBottom" | "PaddingLeft" | "PaddingRight"> {
		return {
			PaddingTop: new UDim(0, sizeY),
			PaddingBottom: new UDim(0, sizeY),
			PaddingLeft: new UDim(0, sizeX),
			PaddingRight: new UDim(0, sizeX),
		};
	}

	type modeData = {
		FillDirection: InstanceProps<UIListLayout>["FillDirection"];
		Wraps: InstanceProps<UIListLayout>["Wraps"];
	};
	export const autoLayoutMode: {
		Horizontal: modeData;
		Vertical: modeData;
		Wrap: modeData;
	} = {
		Horizontal: {
			FillDirection: "Horizontal",
			Wraps: false,
		},
		Vertical: {
			FillDirection: "Vertical",
			Wraps: false,
		},
		Wrap: {
			FillDirection: "Horizontal",
			Wraps: true,
		},
	};

	type AlignmentData = {
		HorizontalAlignment: InstanceProps<UIListLayout>["HorizontalAlignment"];
		VerticalAlignment: InstanceProps<UIListLayout>["VerticalAlignment"];
	};

	export const alignModes: {
		TopLeft: AlignmentData;
		Left: AlignmentData;
		BottomLeft: AlignmentData;
		TopRight: AlignmentData;
		Right: AlignmentData;
		BottomRight: AlignmentData;
		TopCenter: AlignmentData;
		Center: AlignmentData;
		BottomCenter: AlignmentData;
	} = {
		TopLeft: { HorizontalAlignment: "Left", VerticalAlignment: "Top" },
		Left: { HorizontalAlignment: "Left", VerticalAlignment: "Center" },
		BottomLeft: { HorizontalAlignment: "Left", VerticalAlignment: "Bottom" },
		TopRight: { HorizontalAlignment: "Right", VerticalAlignment: "Top" },
		Right: { HorizontalAlignment: "Right", VerticalAlignment: "Center" },
		BottomRight: { HorizontalAlignment: "Right", VerticalAlignment: "Bottom" },
		TopCenter: { HorizontalAlignment: "Center", VerticalAlignment: "Top" },
		Center: { HorizontalAlignment: "Center", VerticalAlignment: "Center" },
		BottomCenter: { HorizontalAlignment: "Center", VerticalAlignment: "Bottom" },
	};

	export function autoLayout(
		mode: keyof typeof autoLayoutMode,
		align: keyof typeof alignModes,
		space?: number,
	): Pick<
		InstanceProps<UIListLayout>,
		"HorizontalAlignment" | "VerticalAlignment" | "FillDirection" | "Wraps" | "Padding"
	> {
		return {
			...autoLayoutMode[mode],
			...alignModes[align],
			Padding: new UDim(0, space),
		};
	}

	export function textAlign(
		horizontalAlignment: InstanceProps<TextLabel>["TextXAlignment"],
		verticalAlignment: InstanceProps<TextLabel>["TextYAlignment"],
	): Pick<InstanceProps<TextLabel>, "TextXAlignment" | "TextYAlignment"> {
		return {
			TextXAlignment: horizontalAlignment,
			TextYAlignment: verticalAlignment,
		};
	}

	export function createPad(...args: Parameters<typeof pad>): ReactNode {
		return <uipadding {...pad(...args)} />;
	}
	export function createAutoLayout(...args: Parameters<typeof autoLayout>): ReactNode {
		return <uilistlayout {...autoLayout(...args)} SortOrder={"LayoutOrder"} />;
	}
}
