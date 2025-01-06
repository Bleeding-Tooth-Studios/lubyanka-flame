import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { MainMenuScreen } from "../uiscreens/uiscreens.main-menu";
import { TEST_VARIABLES } from "./TEST_VARIABLES";

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: {
		healthProgress: 0.6,
	},
	story: () => {
		return <MainMenuScreen {...TEST_VARIABLES} />;
	},
};

export = story;
