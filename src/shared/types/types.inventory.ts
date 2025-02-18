import { MeleeWeaponInstance } from "./types.melee-weapon";
import { WeaponInstance } from "./types.weapon";

export type PlayerInventory = {
	playerEquipment: PlayerEquipment;
	playerMaterials: PlayerMaterials;
};

export type PlayerEquipment = {
	meleeSlot: MeleeWeaponInstance | undefined;
	firearmSlot: WeaponInstance | undefined;
	idleSlot: MeleeWeaponInstance; //basically what is equipped when the player unequips their weapon
	utility1: WeaponInstance | undefined;
	utility2: WeaponInstance | undefined;
	utility3: WeaponInstance | undefined;
	utility4: WeaponInstance | undefined;
};

export type PlayerMaterials = {
	clothPiece: number;
	razorBlades: number;
	oilBottle: number;
	soulStones: number;
};

export type PlayerEquipmentSlot = keyof PlayerEquipment;
