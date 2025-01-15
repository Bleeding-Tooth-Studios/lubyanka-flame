import React from "@rbxts/react";
import FigmaGeneric, { createFigmaGeneric, GenericFigmaProps, GetGuiObjectsOfType } from "./FigmaGeneric";
import { Figma } from "client/util/util.ui";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { TextStyle } from "client/types/types.uitypes";

export type GenericFigmaLabelProps = {
	font_style?: keyof typeof TEXT_STYLES;
	align?: Parameters<typeof Figma.textAlign>;
};

export function createFigmaLabel<T extends GetGuiObjectsOfType<ReturnType<typeof Figma.textAlign & TextStyle>>>(as: T) {
	return (props: Omit<GenericFigmaProps<T> & GenericFigmaLabelProps, "as">) => {
		props.rbx = {
			...props.rbx,
			...TEXT_STYLES[props.font_style ?? "BODY"],
		} as JSX.IntrinsicElements[Lowercase<T>];
		return <FigmaGeneric as={as} {...Figma.textAlign(...(props.align ?? ["Left", "Top"]))} {...props} />;
	};
}

export const FigmaCanvasGroup = createFigmaGeneric("CanvasGroup");
export const FigmaFrame = createFigmaGeneric("Frame");
export const FigmaImageButton = createFigmaGeneric("ImageButton");
export const FigmaImageLabel = createFigmaGeneric("ImageLabel");
export const FigmaScrollingFrame = createFigmaGeneric("ScrollingFrame");
export const FigmaTextBox = createFigmaLabel("TextBox");
export const FigmaTextButton = createFigmaLabel("TextButton");
export const FigmaTextLabel = createFigmaLabel("TextLabel");
export const FigmaVideoFrame = createFigmaGeneric("VideoFrame");
export const FigmaViewportFrame = createFigmaGeneric("ViewportFrame");
