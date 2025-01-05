import React, { InstanceProps, PropsWithChildren } from "@rbxts/react";

function InvisibleFrame(props: PropsWithChildren<InstanceProps<Frame>>) {
	const instanceProps: Pick<typeof props, keyof InstanceProps<Frame>> = props;

	return (
		<frame BackgroundTransparency={1} Transparency={1} BorderSizePixel={0} {...instanceProps}>
			{props.children}
		</frame>
	);
}

export default InvisibleFrame;
