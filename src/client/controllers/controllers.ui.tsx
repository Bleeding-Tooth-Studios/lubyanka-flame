import { Controller, OnStart } from "@flamework/core";
import { Make } from "@rbxts/altmake";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { subtitlesQueue } from "client/states/states.subtitles";
import { InGameScreen } from "client/ui/uiscreens/uiscreens.ingame";

@Controller({})
export class UIController implements OnStart {
	public uiContainer = Make("ScreenGui", {
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui"),
	});

	public uiRoot = ReactRoblox.createRoot(this.uiContainer);

	onStart() {
		this.uiRoot.render(<InGameScreen subtitlesQueue={subtitlesQueue} />);
	}
}
