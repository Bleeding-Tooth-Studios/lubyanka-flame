import { Atom } from "@rbxts/charm";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { ReactNode, useEffect, useRef } from "@rbxts/react";
import { useAtom } from "@rbxts/react-charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { ANCHORS, UIUTILS } from "../uiconsts/uiconsts.util";
import { Figma } from "client/util/util.ui";

export type SubtitleBoxProps = {
	subtitlesQueue: Atom<SubtitleData[]>;
};
export function SubtitleBox(props: SubtitleBoxProps): ReactNode {
	const { subtitlesQueue } = props;
	const [boxHeightBinding, boxHeightMotion] = useMotion(0);
	const [boxTransparencyBinding, boxTransparencyMotion] = useMotion(0);

	const subtitles = useAtom(subtitlesQueue);

	const subtitleFrameRef = useRef<Frame>();

	const subtitlesChildren = subtitles.map((data) => {
		return (
			<textlabel
				key={"SubtitleText"}
				{...Figma.font_style("BODY")}
				{...Figma.textAlign("Left", "Center")}
				{...Figma.size("Fill", "Hug")}
				TextColor3={COLORS.WHITE}
				Text={data.text}
				{...UIUTILS.NOBACKGROUND}
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
			Visible={true}
		>
			<frame
				key={"SubtitleTextFrame"}
				Size={new UDim2(1, 0, 0, 0)}
				Transparency={1}
				BackgroundTransparency={1}
				BorderSizePixel={0}
				AutomaticSize={"Y"}
				ref={subtitleFrameRef}
			>
				{...subtitlesChildren}
			</frame>
		</imagelabel>
	);
}
