import { OnStart } from "@flamework/core";
import { Component, BaseComponent, Components } from "@flamework/components";
import { atom, Atom } from "@rbxts/charm";
import { PlayerInventory } from "shared/types/types.inventory";
import { Functions } from "server/network";
import { Weapon } from "shared/types/types.weapon";

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

	onStart() {}
}
