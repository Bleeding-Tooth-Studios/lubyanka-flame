import { TextStyle } from "client/types/types.uitypes";
import { FONTS } from "./uiconsts.util";

export namespace TEXT_STYLES {
	export const MEDIUM: TextStyle = {
		FontFace: FONTS.LORA,
		FontSize: "Size14",
	};

	export const TITLE: TextStyle = {
		FontFace: FONTS.LORA,
		FontSize: "Size96",
	};

	export const LARGE: TextStyle = {
		FontFace: FONTS.LORA,
		FontSize: "Size32",
	};

	export const SCREENHEADERS: TextStyle = {
		FontFace: FONTS.LORA,
		FontSize: "Size24",
	};

	export const HEADING: TextStyle = {
		FontFace: FONTS.LORA,
		FontSize: "Size32",
	};
}

export namespace Lubyanka {
	export const Huge = {
		name: "Huge",
		fontFamily: "Lora",
		fontWeight: "SemiBold",
		fontSize: 96,
		letterSpacing: { unit: "PERCENT", value: 0 },
		textCase: "ORIGINAL",
	};

	export const Heading = {
		name: "Heading",
		fontFamily: "Lora",
		fontWeight: "Bold",
		fontSize: 32,
		letterSpacing: { unit: "PERCENT", value: 0 },
		textCase: "ORIGINAL",
	};

	export const Subheading = {
		name: "Subheading",
		fontFamily: "Lora",
		fontWeight: "SemiBold",
		fontSize: 24,
		letterSpacing: { unit: "PERCENT", value: 0 },
		textCase: "ORIGINAL",
	};

	export const Body = {
		name: "Body",
		fontFamily: "Lora",
		fontWeight: "Regular",
		fontSize: 14,
		letterSpacing: { unit: "PERCENT", value: 0 },
		textCase: "ORIGINAL",
	};
}
