import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import { atom, Atom, peek, subscribe } from "@rbxts/charm";
import { deepCopy } from "@rbxts/object-utils";
import { CharacterRigR6 } from "@rbxts/promise-character";
import { ReplicatedStorage } from "@rbxts/services";
import { PlayerEquipment, PlayerEquipmentSlot, PlayerMaterials } from "shared/types/types.inventory";
import { MeleeWeaponInstance } from "shared/types/types.melee-weapon";
import { PlayerInventory } from "shared/types/types.player-data";
import { WeaponInstance } from "shared/types/types.weapon";
import { WeaponData } from "shared/types/types.weapon-stats";
import { weldWeapon } from "shared/util/util.weld-weapon";

@Component({
	tag: "player-inventory",
})
export class InventoryComponent extends BaseComponent<{}, CharacterRigR6> implements OnStart {
	public inventoryState: Atom<PlayerInventory> = atom<PlayerInventory>({
		equippedWeapon: undefined,

		playerEquipment: {
			meleeSlot: undefined,
			firearmSlot: undefined,
			idleSlot: ReplicatedStorage.FindFirstChild("fists") as MeleeWeaponInstance,
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

	public equippedWeaponState = atom<WeaponInstance>(this.inventoryState().playerEquipment.idleSlot.Clone());
	public equippedSlotState = atom<PlayerEquipmentSlot>("idleSlot");

	readPlayerInventory(): PlayerInventory {
		return this.inventoryState();
	}

	giveMelee(weaponId: string): void {
		this.inventoryState((prev) => {
			const inventoryClone = deepCopy(prev);

			inventoryClone.playerEquipment.meleeSlot = ReplicatedStorage.FindFirstChild(
				weaponId,
			) as MeleeWeaponInstance;

			print(`Player melee slot now filled with: ${inventoryClone.playerEquipment.meleeSlot}`);

			return inventoryClone;
		});
	}

	equipSlot(slot: keyof PlayerEquipment): WeaponInstance {
		if (slot === this.equippedSlotState()) slot = "idleSlot";
		this.equippedSlotState(slot);

		return peek(this.equippedWeaponState);
	}

	private _handleWeaponState(currentWeapon: WeaponInstance, prevWeapon?: WeaponInstance): void {
		if (prevWeapon) prevWeapon.Destroy();

		const player = this.instance;
		const character = this.instance;

		const weaponData = require(currentWeapon.weaponData) as WeaponData;
		currentWeapon.Parent = character;

		weldWeapon(currentWeapon, character[weaponData.weldParent]);
	}

	private _handleSlotState(currentSlot: PlayerEquipmentSlot): void {
		let targetWeapon = this.readPlayerInventory().playerEquipment[currentSlot];

		if (!targetWeapon) {
			targetWeapon = this.inventoryState().playerEquipment.idleSlot;
		}

		this.equippedWeaponState(targetWeapon.Clone());
	}

	onStart() {
		subscribe(this.equippedWeaponState, (currentWeapon, prevWeapon) =>
			this._handleWeaponState(currentWeapon, prevWeapon),
		);

		subscribe(this.equippedSlotState, (currentSlot) => this._handleSlotState(currentSlot));
	}
}
