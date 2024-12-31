const X_LEFT = 0;
const X_CENTER = 0.5;
const X_RIGHT = 1;

const Y_TOP = 0;
const Y_MIDDLE = 0.5;
const Y_BOTTOM = 1;

export namespace ANCHORS {
	export const LEFT_TOP: Vector2 = new Vector2(X_LEFT, Y_TOP);
	export const LEFT_MIDDLE: Vector2 = new Vector2(X_LEFT, Y_MIDDLE);
	export const LEFT_BOTTOM: Vector2 = new Vector2(X_LEFT, Y_BOTTOM);

	export const CENTER_TOP: Vector2 = new Vector2(X_CENTER, Y_TOP);
	export const CENTER_MIDDLE: Vector2 = new Vector2(X_CENTER, Y_MIDDLE);
	export const CENTER_BOTTOM: Vector2 = new Vector2(X_CENTER, Y_BOTTOM);

	export const RIGHT_TOP: Vector2 = new Vector2(X_RIGHT, Y_TOP);
	export const RIGHT_MIDDLE: Vector2 = new Vector2(X_RIGHT, Y_MIDDLE);
	export const RIGHT_BOTTOM: Vector2 = new Vector2(X_RIGHT, Y_BOTTOM);
}

export namespace POSITIONSCALES {
	export const LEFT_TOP: UDim2 = UDim2.fromScale(X_LEFT, Y_TOP);
	export const LEFT_MIDDLE: UDim2 = UDim2.fromScale(X_LEFT, Y_MIDDLE);
	export const LEFT_BOTTOM: UDim2 = UDim2.fromScale(X_LEFT, Y_BOTTOM);

	export const CENTER_TOP: UDim2 = UDim2.fromScale(X_CENTER, Y_TOP);
	export const CENTER_MIDDLE: UDim2 = UDim2.fromScale(X_CENTER, Y_MIDDLE);
	export const CENTER_BOTTOM: UDim2 = UDim2.fromScale(X_CENTER, Y_BOTTOM);

	export const RIGHT_TOP: UDim2 = UDim2.fromScale(X_RIGHT, Y_TOP);
	export const RIGHT_MIDDLE: UDim2 = UDim2.fromScale(X_RIGHT, Y_MIDDLE);
	export const RIGHT_BOTTOM: UDim2 = UDim2.fromScale(X_RIGHT, Y_BOTTOM);
}

export namespace FONTS {
	export const LORA: Font = Font.fromId(12187366657);
}
