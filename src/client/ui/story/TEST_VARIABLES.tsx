import { atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";
import { ScreenProps, UIState } from "client/types/types.uitypes";
import { COLORS } from "../uiconsts/uiconsts.colors";

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

	uiState: atom<UIState>({
		currentMainMenuPage: "CREDITS_PAGE",
		currentScreen: "MAIN_MENU",
	}),
};
