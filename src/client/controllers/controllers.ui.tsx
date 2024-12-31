import { Controller, OnStart } from "@flamework/core";
import { Make } from "@rbxts/altmake";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { subtitlesQueue } from "client/states/states.subtitles";
import { InGamePage } from "client/ui/uipages/uipages.ingame";

@Controller({})
export class UIController implements OnStart {
	public uiContainer = Make("ScreenGui", {
		Parent: Players.LocalPlayer.WaitForChild("PlayerGui"),
	});

	public uiRoot = ReactRoblox.createRoot(this.uiContainer);

	onStart() {
		this.uiRoot.render(<InGamePage subtitlesQueue={subtitlesQueue} healthProgress={100} />);
	}
}
