import React, { ReactNode } from "@rbxts/react";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { PADDING } from "client/ui/uiconsts/uiconsts.padding";
import { TEXT_STYLES } from "client/ui/uiconsts/uiconsts.textstyles";
import { MainMenuPageProps } from "client/types/types.uitypes";
import { UIStateActions } from "client/util/util.uistate-actions";
import FigmaFrame from "client/ui/uicomponents/FigmaFrame";

export function MainPage(props: MainMenuPageProps): ReactNode {
	return (
		<FigmaFrame autoLayout={["Vertical", "TopLeft", 12]} size={["Fill", "Fill"]} pad={[PADDING.L, PADDING.L]}>
			<textbutton
				{...TEXT_STYLES.TITLE}
				LayoutOrder={1}
				Text={"The Fourth Recursion"}
				key={"Title"}
				AutomaticSize={"XY"}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SCREENHEADERS}
				LayoutOrder={2}
				Text={"Play"}
				key={"Play"}
				AutomaticSize={"XY"}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SCREENHEADERS}
				LayoutOrder={3}
				Text={"Loadout"}
				key={"Loadout"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SCREENHEADERS}
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
				{...TEXT_STYLES.SCREENHEADERS}
				LayoutOrder={5}
				key={"Options"}
				Text={"Options"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
			/>
			<textbutton
				{...TEXT_STYLES.SCREENHEADERS}
				LayoutOrder={6}
				Text={"Credits"}
				key={"Credits"}
				BackgroundTransparency={1}
				AutomaticSize={"XY"}
				BorderSizePixel={0}
				TextColor3={COLORS.WHITE}
				Event={{
					MouseButton1Click: (rbx) => {
						props.fadeToPage("CREDITS_PAGE", 0.25);
					},
				}}
			/>
		</FigmaFrame>
	);
}
