import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import Maid from "@rbxts/maid";
import { WeaponInstance } from "shared/types/types.weapon";

@Component({
	tag: "weapon",
})
export class WeaponComponent extends BaseComponent<{}, WeaponInstance> implements OnStart {
	private maid = new Maid();

	equip() {}

	unequip() {}

	onStart() {}
}
