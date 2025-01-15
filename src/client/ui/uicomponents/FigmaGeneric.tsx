import React, { PropsWithChildren } from "@rbxts/react";
import { Figma } from "client/util/util.ui";

export type GuiObjects = {
	[K in keyof CreatableInstances]: CreatableInstances[K] extends GuiObject ? K : never;
}[keyof CreatableInstances];

export type GetGuiObjectsOfType<T> = {
	[K in GuiObjects as string]: CreatableInstances[K] extends T ? K : never;
}[GuiObjects];

export type GenericFigmaProps<T extends GuiObjects> = PropsWithChildren<{
	as: T;
	rbx?: JSX.IntrinsicElements[Lowercase<T>];
	size?: Parameters<typeof Figma.size>;
	pad?: Parameters<typeof Figma.createPad>;
	autoLayout?: Parameters<typeof Figma.createAutoLayout>;
}>;

export function createFigmaGeneric<T extends GuiObjects>(as: T) {
	return (props: Omit<GenericFigmaProps<T>, "as">) => <FigmaGeneric as={as} {...props} />;
}

/**
 * FigmaGeneric
 * @description The base class for all FigmaComponents
 * @param props
 * @returns FigmaComponent
 */
function FigmaGeneric<T extends GuiObjects>(props: GenericFigmaProps<T>) {
	const { autoLayout, children, pad, rbx, size, as } = props;
	const TargetComponent = as.lower() as Lowercase<GuiObjects> as string;

	return (
		<TargetComponent
			BackgroundTransparency={1}
			BorderSizePixel={0}
			{...(rbx && (rbx as JSX.IntrinsicElements[Lowercase<T>]))}
			{...Figma.size(...(size ?? ["Hug", "Hug"]))}
		>
			{autoLayout && Figma.createAutoLayout(...autoLayout)}
			{pad && Figma.createPad(...pad)}

			{children}
		</TargetComponent>
	);
}

export default FigmaGeneric;
