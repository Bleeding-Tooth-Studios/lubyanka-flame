import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { RunService } from "@rbxts/services";
import { pruneSubtitleQueue } from "client/controllers/controllers.subtitles";
import { ScreenProps } from "client/types/types.uitypes";
import { InGameScreen } from "../uiscreens/uiscreens.ingame";
import { TEST_VARIABLES } from "./TEST_VARIABLES";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: {
		healthProgress: 0.6,
	},
	story: (controls: ScreenProps) => {
		RunService.Heartbeat.Connect(() => pruneSubtitleQueue(TEST_VARIABLES.subtitlesQueue));

		return <InGameScreen {...TEST_VARIABLES} />;
	},
};

export = story;
