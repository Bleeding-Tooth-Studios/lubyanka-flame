import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { MainMenuScreen } from "../uiscreens/uiscreens.main-menu";
import { TEST_VARIABLES } from "./TEST_VARIABLES";
import { uiState } from "client/states/states.ui";
import { subtitlesQueue } from "client/states/states.subtitles";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: {
		healthProgress: 0.6,
	},
	story: () => {
		return <MainMenuScreen uiState={uiState} subtitlesQueue={subtitlesQueue} />;
	},
};

export = story;
