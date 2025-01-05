import { Component, FunctionComponent, ReactNode } from "@rbxts/react";
import { CreditsPage } from "client/ui/uiscreens/main-menu/main-menu.credits";
import { MainPage } from "client/ui/uiscreens/main-menu/main-menu.main-page";
import { InGameScreen } from "client/ui/uiscreens/uiscreens.ingame";
import { MainMenuScreen } from "client/ui/uiscreens/uiscreens.main-menu";
import { MainMenuPageProps, MainMenuPages, ScreenProps, UIScreens } from "shared/types/types.uitypes";

export const UIScreensMap: Record<UIScreens, (props: ScreenProps) => ReactNode> = {
	[UIScreens.inGame]: InGameScreen,
	[UIScreens.mainMenu]: MainMenuScreen,
};

export const MainMenuPagesMap: Record<MainMenuPages, (props: MainMenuPageProps) => ReactNode> = {
	[MainMenuPages.mainPage]: MainPage,
	[MainMenuPages.keybindsPage]: CreditsPage,
	[MainMenuPages.creditsPage]: CreditsPage,
};
