import React, { ReactNode } from "@rbxts/react";

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
