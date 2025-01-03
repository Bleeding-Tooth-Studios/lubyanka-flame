import { Components } from "@flamework/components";
import { Service, OnStart, Dependency } from "@flamework/core";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";
import { PlayerInventory } from "shared/types/types.inventory";

@Service()
export class InventoryService implements OnStart {
	constructor(private readonly components: Components) {}

	readPlayerInventory(player: Player) {
		const inventoryComponent = this.components.getComponent<InventoryComponent>(player);

		if (!inventoryComponent) error(`No inventory on player: ${player.Name}`);

		return inventoryComponent.inventoryState();
	}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			const x = this.components.addComponent<InventoryComponent>(player);
		});

		Functions.getPlayerInventory.setCallback((player) => this.readPlayerInventory(player));

		Functions.requestEquipWeapon.setCallback((player, weapon) => {});
	}
}
