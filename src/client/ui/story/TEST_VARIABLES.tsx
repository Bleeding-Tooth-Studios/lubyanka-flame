import { atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { COLORS } from "../uiconsts/uiconsts.colors";
import { UIState, UIScreens, MainMenuPages, ScreenProps } from "shared/types/types.uitypes";
import React from "@rbxts/react";
import { subtitlesQueue } from "client/states/states.subtitles";
import { MainMenuPagesMap } from "client/consts/consts.uistates";
import { uiScreenState } from "client/states/states.ui";

export const TEST_VARIABLES: ScreenProps = {
	subtitlesQueue: atom<SubtitleData[]>([
		{
			text: "Truth is a real power.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: 2 + 1,
		},
		{
			text: "Whoever is right is strong.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: 2 + 2,
		},
		{
			text: "You cheated on a man and took away his money.",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: 2 + 3,
		},
		{
			text: "Did it make you stronger?",
			color: COLORS.WHITE,
			timeApplied: os.time(),
			duration: 2 + 4,
		},
		{ text: "Did it?", color: COLORS.WHITE, timeApplied: os.time(), duration: 2 + 6 },
	]),

	uiMenuPageState: atom<MainMenuPages>(MainMenuPages.mainPage),
	uiScreenState: atom<UIScreens>(UIScreens.mainMenu),
};
