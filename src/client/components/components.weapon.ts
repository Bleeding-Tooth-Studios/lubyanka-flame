import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { CharacterRigR6, promiseR6 } from "@rbxts/promise-character";
import Maid from "@rbxts/maid";
import { Players } from "@rbxts/services";
import { MeleeWeapon } from "shared/types/types.melee-weapon";
import { Functions } from "client/network";
import { Weapon } from "shared/types/types.weapon";

@Component({
	tag: "weapon",
})
export class WeaponComponent extends BaseComponent<{}, Weapon> implements OnStart {
	private maid = new Maid();

	equip() {}

	unequip() {}

	onStart() {}
}
