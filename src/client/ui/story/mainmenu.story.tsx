import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { RunService } from "@rbxts/services";
import { pruneSubtitleQueue } from "client/controllers/controllers.subtitles";
import { ScreenProps } from "shared/types/types.uitypes";
import { TEST_VARIABLES } from "./TEST_VARIABLES";
import { MainMenuScreen } from "../uiscreens/uiscreens.main-menu";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: {
		healthProgress: 0.6,
	},
	story: (controls: ScreenProps) => {
		return <MainMenuScreen {...TEST_VARIABLES} />;
	},
};

export = story;
