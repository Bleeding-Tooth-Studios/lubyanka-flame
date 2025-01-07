import { CenturionType, Command, CommandContext, Group, Register } from "@rbxts/centurion";
import { Functions } from "client/network";

@Register()
export class InventoryCommand {
	@Command({
		name: "readInventory",
		description: "Reads your player inventory",
		arguments: [],
	})
	readInventory(ctx: CommandContext) {
		Functions.readPlayerInventory.invoke().then((data) => {
			print(data);
		});
		ctx.reply("Please check your output. (F9)");
	}
}
