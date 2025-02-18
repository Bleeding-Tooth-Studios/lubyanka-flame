import React from "@rbxts/react";
import { FunctionComponent } from "@rbxts/react";
import { Figma } from "client/util/util.ui";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { UIUTILS } from "../uiconsts/uiconsts.util";

interface KeybindSectionProps {}

const KeybindSection: FunctionComponent<KeybindSectionProps> = () => {
	return (
		<frame
			{...UIUTILS.NOBORDER}
			{...Figma.size("Fill", "Hug")}
			key="KeybindSetting"
			BackgroundColor3={COLORS.DARKRED}
		>
			<textlabel
				{...UIUTILS.NOBACKGROUND}
				{...UIUTILS.NOBORDER}
				{...TEXT_STYLES["SUBHEADING"]}
				{...Figma.textAlign("Left", "Center")}
				key="Action"
				Text="Attack"
				TextColor3={COLORS.WHITE}
			/>
			<textlabel
				{...UIUTILS.NOBACKGROUND}
				{...UIUTILS.NOBORDER}
				{...TEXT_STYLES["SUBHEADING"]}
				{...Figma.size("Hug", "Hug")}
				key="Keybind"
				Text="MouseLeftButton"
				TextColor3={COLORS.WHITE}
			/>
		</frame>
	);
};

export default KeybindSection;
