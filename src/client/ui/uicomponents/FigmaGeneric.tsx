import React, { InstanceProps } from "@rbxts/react";
import { FigmaProps } from "client/types/types.uitypes";

type IntrinsicOfType<T extends Instance> = {
	[K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] extends InstanceProps<T> ? K : never;
}[keyof JSX.IntrinsicElements];

function FigmaGeneric<T extends GuiObject>(props: FigmaProps<T> & { as: keyof JSX.IntrinsicElements }) {
	const { autoLayout, children, pad, rbx, size, as: CustomComponent } = props;

	return <CustomComponent>{children}</CustomComponent>;
}

export default FigmaGeneric;
