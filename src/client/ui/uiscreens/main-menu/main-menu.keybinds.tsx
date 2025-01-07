import React, { PropsWithChildren, ReactNode } from "@rbxts/react";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { PADDING } from "client/ui/uiconsts/uiconsts.padding";
import { TEXT_STYLES } from "client/ui/uiconsts/uiconsts.textstyles";
import { MainMenuPageProps } from "client/types/types.uitypes";
import { FONTS } from "client/ui/uiconsts/uiconsts.util";

export function KeybindsPage(props: MainMenuPageProps): ReactNode {
	return (
		<frame
			key="KeybindsPage"
			BackgroundColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Position={new UDim2(0, 12, 0, 12)}
			Size={new UDim2(0, 1342, 0, 744)}
		>
			<frame
				key="Group"
				BackgroundColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Size={new UDim2(0, 1342, 0, 441)}
			>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 10)}
					Size={new UDim2(0, 1322, 0, 41)}
				>
					<textbutton
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 71, 0, 41)}
						Text="Back"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={32}
						TextXAlignment={Enum.TextXAlignment.Left}
						Event={{
							MouseButton1Click: () => {
								props.fadeToPage("MAIN_PAGE", 2);
							},
						}}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1185, 0, 0)}
						Size={new UDim2(0, 137, 0, 41)}
						Text="Keybinds"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={32}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="Rectangle 1"
					BackgroundColor3={Color3.fromRGB(217, 217, 217)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 61)}
					Size={new UDim2(0, 1322, 0, 1)}
				/>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 72)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
					<textlabel
						key="Action"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Size={new UDim2(0, 74, 0, 31)}
						Text="Attack"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
					<textlabel
						key="Keybind"
						BackgroundTransparency={1}
						Font={Enum.Font.Unknown}
						FontFace={FONTS.LORA}
						Position={new UDim2(0, 1123, 0, 0)}
						Size={new UDim2(0, 199, 0, 31)}
						Text="MouseLeftButton"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
						TextXAlignment={Enum.TextXAlignment.Left}
					/>
				</frame>
				<frame
					key="KeybindSetting"
					BackgroundColor3={Color3.fromRGB(51, 0, 0)}
					BorderSizePixel={0}
					Position={new UDim2(0, 10, 0, 113)}
					Size={new UDim2(0, 1322, 0, 31)}
				>
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
