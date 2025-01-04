import { Components } from "@flamework/components";
import { Service, OnStart } from "@flamework/core";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";

@Service()
export class InventoryService implements OnStart {
	constructor(private readonly components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			const x = this.components.addComponent<InventoryComponent>(player);

			x.giveMelee("axe");
		});

		Functions.equipSlot.setCallback((player, slot) => {
			const component =
				this.components.getComponent<InventoryComponent>(player) ??
				error(`Player ${player.Name} has no inventory component!`);
			return component.equipSlot(slot);
		});

		Functions.readPlayerInventory.setCallback((player) => {
			const component =
				this.components.getComponent<InventoryComponent>(player) ??
				error(`Player ${player.Name} has no inventory component!`);
			return component.readPlayerInventory();
		});
	}
}
