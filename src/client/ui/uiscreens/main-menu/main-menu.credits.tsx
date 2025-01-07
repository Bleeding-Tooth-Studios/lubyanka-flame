import React, { ReactNode } from "@rbxts/react";
import { MainMenuPageProps } from "client/types/types.uitypes";
import { PADDING } from "client/ui/uiconsts/uiconsts.padding";
import { FONTS } from "client/ui/uiconsts/uiconsts.util";

export function CreditsPage(props: MainMenuPageProps): ReactNode {
	return (
		<frame key="CreditsPage" BackgroundTransparency={1} BorderSizePixel={0} Size={UDim2.fromScale(1, 1)}>
			<frame key="Buttons" BackgroundTransparency={1} BorderSizePixel={0} Size={UDim2.fromScale(1, 1)}>
				<uilistlayout
					FillDirection={"Vertical"}
					HorizontalAlignment={"Center"}
					VerticalAlignment={"Top"}
					Padding={new UDim(0, PADDING.L)}
				/>
				<frame key="Section1" BackgroundTransparency={1} BorderSizePixel={0} AutomaticSize={"XY"}>
					<uilistlayout
						FillDirection={"Vertical"}
						HorizontalAlignment={"Center"}
						VerticalAlignment={"Top"}
						Padding={new UDim(0, PADDING.L)}
					/>
					<textlabel
						key="Heading"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Team BLTH"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={96}
					/>
					<imagelabel
						key="Icon"
						BackgroundTransparency={1}
						Image="rbxassetid://137041273079286"
						Size={UDim2.fromOffset(70, 75)}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="leon31323 - Programmer, UI"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="WillysInPain - Art, UI, Map Design"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
				</frame>
				<frame key="Section2" BackgroundTransparency={1} BorderSizePixel={0} AutomaticSize={"XY"}>
					<uilistlayout
						FillDirection={"Vertical"}
						HorizontalAlignment={"Center"}
						VerticalAlignment={"Top"}
						Padding={new UDim(0, PADDING.L)}
					/>
					<textlabel
						key="Heading"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Inspiration"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={96}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Fear & Hunger 2: Termina (2022)"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="ULTRAKILL (2020)"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Сталкер (Stalker) (1979)"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Брат (Brother) (1997)"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text="Преступление и наказание (Crime & Punishment) (1866)"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={24}
					/>
					<textlabel
						key="Line"
						BackgroundTransparency={1}
						FontFace={FONTS.LORA}
						AutomaticSize={"XY"}
						Text={`
The above works and their authors do not in any way endorse, or are in any way affiliated, with this project, and are
presented purely as sources of artistic, aesthetic or literary inspiration.
We explicitly declare that our project is a unique, original creation that does not replicate, reproduce, or infringe upon the protected elements of the listed works.`}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextSize={14}
					/>
				</frame>
			</frame>
		</frame>
	);
}
