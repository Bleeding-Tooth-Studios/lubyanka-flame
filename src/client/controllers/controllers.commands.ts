import { Controller, OnStart } from "@flamework/core";
import { Centurion } from "@rbxts/centurion";
import { CenturionUI } from "@rbxts/centurion-ui";
import { ContextActionService, StarterGui } from "@rbxts/services";
import { COMMANDS_CLIENT_CONTAINER } from "client/commands";
import { InputController } from ".";
import { CENTURION_CLIENT } from "client/consts/consts.centurion";

@Controller()
export class CommandsController implements OnStart {
	onStart(): void {
		CENTURION_CLIENT.registry.load(COMMANDS_CLIENT_CONTAINER);
		const centurionStartPromise = CENTURION_CLIENT.start();

		centurionStartPromise.then(() => {
			print("Centurion started.");
		});

		centurionStartPromise.catch((failReason) => {
			print(`Centurion failed to start. (${failReason})`);
		});

		CenturionUI.start(CENTURION_CLIENT);
		StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.Backpack, false);
	}
}
