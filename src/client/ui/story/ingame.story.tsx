import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InGameScreen } from "../uiscreens/uiscreens.ingame";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { atom, peek } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { RunService } from "@rbxts/services";
import { SUBTITLES_MAX_LINES } from "client/consts/consts.subtitles";
import { subtitlesQueue } from "client/states/states.subtitles";
import { pruneSubtitleQueue } from "client/controllers/controllers.subtitles";
import { ScreenProps } from "shared/types/types.uitypes";

namespace TEST_VARIABLES {
	export const SUBTITLE_DURATION = 2;

	export const SUBTITLE_QUEUE = atom<SubtitleData[]>([
		{
			text: "Truth is a real power.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: SUBTITLE_DURATION + 1,
		},
		{
			text: "Whoever is right is strong.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: SUBTITLE_DURATION + 2,
		},
		{
			text: "You cheated on a man and took away his money.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: SUBTITLE_DURATION + 3,
		},
		{
			text: "Did it make you stronger?",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: SUBTITLE_DURATION + 4,
		},
		{ text: "Did it?", color: COLORS.WHITE, timeApplied: os.time(), duration: SUBTITLE_DURATION + 6 },
	]);
}

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: {
		healthProgress: 0.6,
	},
	story: (controls: ScreenProps) => {
		RunService.Heartbeat.Connect(() => pruneSubtitleQueue(TEST_VARIABLES.SUBTITLE_QUEUE));

		return <InGameScreen subtitlesQueue={TEST_VARIABLES.SUBTITLE_QUEUE} />;
	},
};

export = story;
