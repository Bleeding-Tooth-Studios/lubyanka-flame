import React, { useBinding, useEffect, useRef } from "@rbxts/react";
import { ReactNode } from "@rbxts/react";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { ANCHORS } from "../uiconsts/uiconsts.util";
import { SubtitleText } from "./SubtitleText";
import { SubtitleData } from "shared/types/types.subtitle";
import { PADDING } from "../uiconsts/uiconsts.padding";
import { useMotion, useTimer } from "@rbxts/pretty-react-hooks";
import { Atom, subscribe } from "@rbxts/charm";
import { useAtom } from "@rbxts/react-charm";
import { SUBTITLEBOX_HEIGHT_INCREMENT } from "../uiconsts/uiconsts.subtitles";
import { RunService } from "@rbxts/services";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";

export type SubtitleBoxProps = {
	subtitlesQueue: Atom<SubtitleData[]>;
};
export function SubtitleBox(props: SubtitleBoxProps): ReactNode {
	const { subtitlesQueue } = props;
	const [boxHeightBinding, boxHeightMotion] = useMotion(0);
	const [boxTransparencyBinding, boxTransparencyMotion] = useMotion(0);

	const subtitles = useAtom(subtitlesQueue);

	const subtitleFrameRef = useRef<Frame>();

	function updateHeightBinding(height: number) {
		boxHeightMotion.spring(height, { mass: 0.01, friction: 10 });
	}

	const subtitlesChildren = subtitles.map((data) => {
		return (
			<textlabel
				key={"SubtitleText"}
				{...TEXT_STYLES.MEDIUM}
				Text={data.text}
				TextColor3={data.color}
				RichText={true}
				BackgroundTransparency={1}
				Size={new UDim2(1, 0, 0, 18)}
				BorderSizePixel={0}
				AutomaticSize={"XY"}
				TextYAlignment={"Center"}
				TextXAlignment={"Left"}
			/>
		);
	});

	useEffect(() => {
		assert(subtitleFrameRef.current);

		boxHeightMotion.spring(subtitleFrameRef.current.AbsoluteSize.Y, { mass: 0.01, friction: 10 });

		boxTransparencyMotion.spring(subtitlesChildren.isEmpty() ? 1 : 0.25, { mass: 0.01, friction: 10 });
	}, [subtitlesChildren]);

	return (
		<imagelabel
			key={"SubtitleBox"}
			Image={"rbxassetid://103474017982487"}
			ImageTransparency={boxTransparencyBinding}
			BackgroundTransparency={boxTransparencyBinding}
			BorderSizePixel={1}
			BorderMode={"Inset"}
			BorderColor3={COLORS.BLACK}
			BackgroundColor3={COLORS.BLACK}
			Size={boxHeightBinding.map((boxHeight) => UDim2.fromOffset(650, boxHeight))}
			AnchorPoint={ANCHORS.CENTER_BOTTOM}
			Position={new UDim2(0.5, 0, 1, -50)}
			ClipsDescendants={true}
			ScaleType={"Slice"}
			SliceCenter={new Rect(new Vector2(0, 0), new Vector2(650, 140))}
			// eslint-disable-next-line roblox-ts/lua-truthiness
			Visible={true}
		>
			<frame
				ref={subtitleFrameRef}
				key={"SubtitleTextFrame"}
				Size={new UDim2(1, 0, 0, 0)}
				Transparency={1}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				AutomaticSize={"Y"}
			>
				<uipadding
					key={"SubtitleBoxPad"}
					PaddingBottom={new UDim(0, PADDING.M)}
					PaddingLeft={new UDim(0, PADDING.M)}
					PaddingRight={new UDim(0, PADDING.M)}
					PaddingTop={new UDim(0, PADDING.M)}
				/>

				<uilistlayout
					key={"SubtitleListLayout"}
					VerticalAlignment={"Top"}
					HorizontalAlignment={"Left"}
					Padding={new UDim(0, PADDING.M)}
					FillDirection={"Vertical"}
				/>
				{...subtitlesChildren}
			</frame>
		</imagelabel>
	);
}
