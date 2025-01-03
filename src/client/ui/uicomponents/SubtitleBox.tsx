import React, { useBinding, useEffect } from "@rbxts/react";
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

export type SubtitleBoxProps = {
	subtitlesQueue: Atom<SubtitleData[]>;
};
export function SubtitleBox(props: SubtitleBoxProps): ReactNode {
	const { subtitlesQueue } = props;
	const [boxHeightBinding, boxHeightMotion] = useMotion(0);
	boxHeightMotion;

	const subtitles = useAtom(subtitlesQueue);

	function updateHeightBinding(lines: number) {
		boxHeightMotion.spring(SUBTITLEBOX_HEIGHT_INCREMENT * lines, { mass: 0.1, tension: 250 });
	}

	useEffect(() => {
		subscribe(subtitlesQueue, (queue) => {
			updateHeightBinding(queue.size());
		});

		updateHeightBinding(subtitles.size());
	}, []);

	return (
		<imagelabel
			Image={"rbxassetid://103474017982487"}
			ImageTransparency={0.25}
			BackgroundTransparency={0.25}
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
			Visible={boxHeightBinding.map((boxHeight) => (boxHeight ? true : false))}
		>
			<uilistlayout FillDirection={"Vertical"} Padding={new UDim(0, PADDING.M)} />
			<uipadding
				PaddingBottom={new UDim(0, PADDING.XS)}
				PaddingLeft={new UDim(0, PADDING.M)}
				PaddingRight={new UDim(0, PADDING.M)}
				PaddingTop={new UDim(0, PADDING.XS)}
			/>
			{...subtitles.map((data) => {
				return <SubtitleText Text={data.text} TextColor3={data.color} />;
			})}
		</imagelabel>
	);
}
