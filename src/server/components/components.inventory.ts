import { OnStart } from "@flamework/core";
import { Component, BaseComponent, Components } from "@flamework/components";
import { atom, Atom } from "@rbxts/charm";
import { PlayerInventory } from "shared/types/types.inventory";
import { Functions } from "server/network";
import { Weapon } from "shared/types/types.weapon";
import { ReplicatedStorage } from "@rbxts/services";
import { MeleeWeapon } from "shared/types/types.melee-weapon";

@Component({
	tag: "player-inventory",
})
export class InventoryComponent extends BaseComponent<{}, Player> implements OnStart {
	public inventoryState: Atom<PlayerInventory> = atom<PlayerInventory>({
		meleeSlot: undefined,
		firearmSlot: undefined,
		razors: 0,
		utility1: undefined,
		utility2: undefined,
		utility3: undefined,
		utility4: undefined,
	});

	public currentlyEquipped: Atom<Weapon | undefined> = atom<Weapon | undefined>(undefined);

	giveMelee(weaponId: string) {
		this.inventoryState((prev) => {
			const dataClone = table.clone(prev);

			dataClone.meleeSlot = ReplicatedStorage.FindFirstChild(weaponId) as MeleeWeapon;

			print(`Player melee slot now filled with: ${dataClone.meleeSlot}`);

			return dataClone;
		});
	}

	giveRazors(amount: number) {
		this.inventoryState((prev) => {
			const dataClone = table.clone(prev);

			dataClone.razors = dataClone.razors + amount;

			print(`Player now has: ${dataClone.razors} razors`);

			return dataClone;
		});
	}

	onStart() {}
}
