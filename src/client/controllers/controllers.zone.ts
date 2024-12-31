import { CollectionService, SoundService, Workspace } from "@rbxts/services";
import { Zone } from "@rbxts/zone-plus";
import { Controller, OnStart } from "@flamework/core";
import { Soundtrack } from "@rbxts/soundtrack";
import { Manager, Sound } from "@rbxts/melody";

@Controller({})
export class ControllersZone implements OnStart {
	private sewerAmbient = Manager.buildSoundCreator("rbxassetid://1150086630")({
		Looped: true,
		Parent: SoundService,
	});

	private forestAmbient = Manager.buildSoundCreator("rbxassetid://7755839253")({
		Looped: true,
		Parent: SoundService,
	});

	onStart() {}
}
