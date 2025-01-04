import React from "@rbxts/react";

function PaddedFrame(props: React.PropsWithChildren<{ paddingSize: number; rbx: React.InstanceProps<Frame> }>) {
	return (
		<frame
			key={"PaddedFrame"}
			Size={new UDim2(1, -props.paddingSize * 2, 1, -props.paddingSize * 2)}
			{...props.rbx}
		>
			{props.children}
		</frame>
	);
}

export default PaddedFrame;
