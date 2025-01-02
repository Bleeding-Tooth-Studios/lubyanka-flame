import { Components } from "@flamework/components";
import { Service, OnStart, Dependency } from "@flamework/core";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";
import { PlayerInventory } from "shared/types/types.inventory";

@Service()
export class InventoryService implements OnStart {
	constructor(private readonly components: Components) {}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			const x = this.components.addComponent<InventoryComponent>(player);
		});

		Functions.getPlayerInventory.setCallback((player) => {
			const inventoryComponent = this.components.getComponent<InventoryComponent>(player);

			if (!inventoryComponent) error(`No inventory on player: ${player.Name}`);

			return inventoryComponent.inventoryState();
		});
	}
}
