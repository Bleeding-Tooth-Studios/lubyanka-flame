import { OnStart } from "@flamework/core";
import { Component, BaseComponent, Components } from "@flamework/components";
import { atom, Atom } from "@rbxts/charm";
import { PlayerEquipment, PlayerMaterials } from "shared/types/types.inventory";
import { Functions } from "server/network";
import { Weapon } from "shared/types/types.weapon";
import { ReplicatedStorage } from "@rbxts/services";
import { MeleeWeapon } from "shared/types/types.melee-weapon";
import { PlayerInventory } from "shared/types/types.player-data";
import { CharacterRigR6 } from "@rbxts/promise-character";
import { WeaponData } from "shared/types/types.weapon-stats";
import { weldWeapon } from "shared/util/util.weld-weapon";

@Component({
	tag: "player-inventory",
})
export class InventoryComponent extends BaseComponent<{}, Player> implements OnStart {
	public inventoryState: Atom<PlayerInventory> = atom<PlayerInventory>({
		equippedWeapon: undefined,

		playerEquipment: {
			meleeSlot: undefined,
			firearmSlot: undefined,
			utility1: undefined,
			utility2: undefined,
			utility3: undefined,
			utility4: undefined,
		},

		playerMaterials: {
			clothPiece: 0,
			oilBottle: 0,
			razorBlades: 0,
			soulStones: 0,
		},
	});

	readPlayerInventory(): PlayerInventory {
		return this.inventoryState();
	}

	giveMelee(weaponId: string): void {
		this.inventoryState((prev) => {
			const inventoryClone = table.clone(prev);

			inventoryClone.playerEquipment.meleeSlot = ReplicatedStorage.FindFirstChild(weaponId) as MeleeWeapon;

			print(`Player melee slot now filled with: ${inventoryClone.playerEquipment.meleeSlot}`);

			return inventoryClone;
		});
	}

	giveMaterial(item: keyof PlayerMaterials, amount: number): void {
		this.inventoryState((prev) => {
			const inventoryClone = table.clone(prev);

			inventoryClone.playerMaterials[item] = inventoryClone.playerMaterials[item] + amount;

			print(`Player material ${item} now has: ${inventoryClone.playerMaterials[item]}`);

			return inventoryClone;
		});
	}

	subtractMaterial(item: keyof PlayerMaterials, amount: number): void {
		this.inventoryState((prev) => {
			const inventoryClone = table.clone(prev);

			inventoryClone.playerMaterials[item] = inventoryClone.playerMaterials[item] - amount;

			print(`Player material ${item} now has: ${inventoryClone.playerMaterials[item]}`);

			return inventoryClone;
		});
	}

	equipSlot(slot: keyof PlayerEquipment): Weapon {
		const targetWeapon = this.readPlayerInventory().playerEquipment[slot];

		if (!targetWeapon) return error(`Slot ${slot} has no weapon!`);

		const player = this.instance;
		const character = player.Character as CharacterRigR6;

		if (!character) return error(`Player ${player.Name} has no character!`);

		const weaponData = require(targetWeapon.weaponData) as WeaponData;
		const clonedWeapon = targetWeapon.Clone();
		clonedWeapon.Parent = character;

		weldWeapon(clonedWeapon, character[weaponData.weldParent]);

		return clonedWeapon;
	}

	onStart() {}
}
