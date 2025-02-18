import React, { ReactNode } from "@rbxts/react";
import { MainMenuPageProps } from "client/types/types.uitypes";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { PADDING } from "client/ui/uiconsts/uiconsts.padding";
import { TEXT_STYLES } from "client/ui/uiconsts/uiconsts.textstyles";
import { FONTS, UIUTILS } from "client/ui/uiconsts/uiconsts.util";
import { Figma } from "client/util/util.ui";

export function KeybindsPage(props: MainMenuPageProps): ReactNode {
	return (
		<frame key={"KeybindsPage"}>
			{Figma.createAutoLayout("Vertical", "TopLeft", PADDING.L)}
			<frame key={"Group"} {...Figma.size("Fill", "Hug")}>
				{Figma.createAutoLayout("Vertical", "TopLeft", PADDING.L)}
				{Figma.createPad(PADDING.L, PADDING.L)}
				<frame
					key={"Topbar"}
					{...Figma.size("Fill", "Hug")}
					{...UIUTILS.NOBORDER}
					BackgroundColor3={COLORS.BLACK}
				>
					<textbutton
						key={"BackButton"}
						{...Figma.size("Hug", "Hug")}
						{...Figma.textAlign("Left", "Center")}
						{...TEXT_STYLES["HEADING"]}
						Text={"Back"}
						TextColor3={COLORS.WHITE}
						Event={{
							MouseButton1Click: () => {
								props.fadeToPage("MAIN_PAGE", 2);
							},
						}}
					/>
					<textlabel
						key={"KeybindsText"}
						{...Figma.size("Hug", "Hug")}
						{...TEXT_STYLES["HEADING"]}
						{...UIUTILS.NOBORDER}
						Text={"Keybinds"}
						TextColor3={COLORS.WHITE}
					/>
				</frame>
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
				<frame {...Figma.size("Fill", "Hug")} key="KeybindSetting" BackgroundColor3={Color3.fromRGB(51, 0, 0)}>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 92, 0, 31)}
						Text="Interact"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1308, 0, 0)}
						Size={new UDim2(0, 14, 0, 31)}
						Text="F"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 154)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 120, 0, 31)}
						Text="Melee Slot"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1312, 0, 0)}
						Size={new UDim2(0, 10, 0, 31)}
						Text="1"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 195)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 142, 0, 31)}
						Text="Firearm Slot"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1309, 0, 0)}
						Size={new UDim2(0, 13, 0, 31)}
						Text="2"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 236)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 160, 0, 31)}
						Text="Utility Slot #1"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1308, 0, 0)}
						Size={new UDim2(0, 14, 0, 31)}
						Text="3"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 277)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 164, 0, 31)}
						Text="Utility Slot #2"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1308, 0, 0)}
						Size={new UDim2(0, 14, 0, 31)}
						Text="4"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 318)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 164, 0, 31)}
						Text="Utility Slot #3"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1308, 0, 0)}
						Size={new UDim2(0, 14, 0, 31)}
						Text="5"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 359)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 164, 0, 31)}
						Text="Utility Slot #4"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1308, 0, 0)}
						Size={new UDim2(0, 14, 0, 31)}
						Text="6"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 400)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 46, 0, 31)}
						Text="Run"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1221, 0, 0)}
						Size={new UDim2(0, 101, 0, 31)}
						Text="LeftShift"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
			</frame>
		</frame>
	);
}
