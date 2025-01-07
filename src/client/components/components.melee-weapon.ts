import { OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { CharacterRigR6 } from "@rbxts/promise-character";
import Maid from "@rbxts/maid";
import { Players } from "@rbxts/services";
import { MeleeWeapon } from "shared/types/types.melee-weapon";

@Component({
	tag: "melee-weapon",
})
export class MeleeWeaponComponent extends BaseComponent<{}, MeleeWeapon> implements OnStart {
	private maid = new Maid();

	equip() {}

	unequip() {}

	onStart() {}
}
