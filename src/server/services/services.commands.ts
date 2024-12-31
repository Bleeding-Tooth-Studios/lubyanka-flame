import { OnStart, Service } from "@flamework/core";
import { Centurion } from "@rbxts/centurion";
import { COMMANDS_SERVER_CONTAINER } from "server/commands";

@Service()
export class CommandsController implements OnStart {
	public CENTURION_CLIENT = Centurion.server();

	onStart(): void {
		this.CENTURION_CLIENT.registry.load(COMMANDS_SERVER_CONTAINER);
		this.CENTURION_CLIENT.start();
	}
}
