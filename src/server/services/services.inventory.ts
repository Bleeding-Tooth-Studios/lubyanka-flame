import { Components } from "@flamework/components";
import { Service, OnStart, Dependency } from "@flamework/core";
import { CharacterRigR6 } from "@rbxts/promise-character";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";
import { PlayerInventory } from "shared/types/types.inventory";
import { WeaponData } from "shared/types/types.weapon-stats";
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

			x.giveMelee("axe");
		});

		Functions.getPlayerInventory.setCallback((player) => this.readPlayerInventory(player));

		Functions.requestEquipSlot.setCallback((player, slot) => {
			print(`Attempting to equip: ${slot}`);
			if (slot === "razors") return error(`${slot} is not implemented yet!`);

			const targetWeapon = this.readPlayerInventory(player)[slot];

			if (!targetWeapon) return error(`Slot ${slot} has no weapon!`);

			const character = player.Character as CharacterRigR6;

			if (!character) return error(`Player ${player.Name} has no character!`);

			const weaponData = require(targetWeapon.weaponData) as WeaponData;
			const clonedWeapon = targetWeapon.Clone();
			clonedWeapon.Parent = character;

			weldWeapon(clonedWeapon, character[weaponData.weldParent]);

			return clonedWeapon;
		});
	}
}
