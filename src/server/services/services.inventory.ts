import { Components } from "@flamework/components";
import { Service, OnStart } from "@flamework/core";
import { CharacterRigR6, promiseR6 } from "@rbxts/promise-character";
import { Players } from "@rbxts/services";
import { InventoryComponent } from "server/components/components.inventory";
import { Functions } from "server/network";

@Service()
export class InventoryService implements OnStart {
	constructor(private readonly components: Components) {}

	private _getPlayerInventoryComponent(player: Player) {
		if (!player.Character) error(`Player ${player.Name} has no character!`);
		const component =
			this.components.getComponent<InventoryComponent>(player.Character) ??
			error(`Player ${player.Name} has no inventory component!`);
		return component;
	}

	onStart() {
		Players.PlayerAdded.Connect((player) => {
			player.CharacterAdded.Connect((character) => {
				promiseR6(character).then((playerCharacterRig) => {
					const x = this.components.addComponent<InventoryComponent>(playerCharacterRig);

					x.giveMelee("axe");
				});
			});
		});

		Functions.equipSlot.setCallback((player, slot) => {
			return this._getPlayerInventoryComponent(player).equipSlot(slot);
		});

		Functions.readPlayerInventory.setCallback((player) => {
			return this._getPlayerInventoryComponent(player).readPlayerInventory();
		});
	}
}
