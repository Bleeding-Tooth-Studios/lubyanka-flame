import React, { ReactNode } from "@rbxts/react";
import { MainMenuPageProps } from "client/types/types.uitypes";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { PADDING } from "client/ui/uiconsts/uiconsts.padding";
import { TEXT_STYLES } from "client/ui/uiconsts/uiconsts.textstyles";
import { Figma } from "client/util/util.ui";

export function MainPage(props: MainMenuPageProps): ReactNode {
	return (
		<frame {...Figma.size("Fill", "Fill")}>
			{}
			{Figma.createPad(PADDING.L, PADDING.L)}
			<textbutton
				{...TEXT_STYLES.HUGE}
				LayoutOrder={1}
				Text={"The Fourth Recursion"}
				key={"Title"}
				AutomaticSize={"XY"}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SUBHEADING}
				LayoutOrder={2}
				Text={"Play"}
				key={"Play"}
				AutomaticSize={"XY"}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SUBHEADING}
				LayoutOrder={3}
				Text={"Loadout"}
				key={"Loadout"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SUBHEADING}
				LayoutOrder={4}
				Text={"Keybinds"}
				key={"Keybinds"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
				Event={{
					MouseButton1Click: (rbx) => {
						props.fadeToPage("KEYBINDS_PAGE", 2);
					},
				}}
			/>
			<textbutton
				{...TEXT_STYLES.SUBHEADING}
				LayoutOrder={5}
				key={"Options"}
				Text={"Options"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SUBHEADING}
				LayoutOrder={6}
				Text={"Credits"}
				key={"Credits"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
		</frame>
	);
}
