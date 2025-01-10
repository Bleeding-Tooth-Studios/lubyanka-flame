import { TextStyle } from "client/types/types.uitypes";
import { FONTS } from "./uiconsts.util";

export namespace TEXT_STYLES {
	export const HUGE: TextStyle = {
		FontFace: FONTS.LORA,
		TextSize: 96,
		LineHeight: 1.0,
	};
	export const HEADING: TextStyle = {
		FontFace: FONTS.LORA,
		TextSize: 32,
		LineHeight: 1.0,
	};
	export const SUBHEADING: TextStyle = {
		FontFace: FONTS.LORA,
		TextSize: 24,
		LineHeight: 1.0,
	};
	export const BODY: TextStyle = {
		FontFace: FONTS.LORA,
		TextSize: 14,
		LineHeight: 1.0,
	};
}
