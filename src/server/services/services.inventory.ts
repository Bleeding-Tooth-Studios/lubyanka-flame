import { Components } from "@flamework/components";
import { Service, OnStart, Dependency } from "@flamework/core";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";
import { PlayerInventory } from "shared/types/types.inventory";
import { weldWeapon } from "shared/util/util.weld-weapon";

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

		Functions.requestEquipSlot.setCallback((player, slot) => {
			if (slot === "razors") return error(`${slot} is not implemented yet!`);

			const targetWeapon = this.readPlayerInventory(player)[slot];

			if (!targetWeapon) return error(`Slot ${slot} has no weapon!`);

			const character = player.Character;

			if (!character) return error(`Player ${player.Name} has no character!`);

			const clonedWeapon = targetWeapon.Clone();
			clonedWeapon.Parent = character;

			return clonedWeapon;
		});
	}
}
