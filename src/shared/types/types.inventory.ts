import { MeleeWeapon } from "./types.melee-weapon";
import { Weapon } from "./types.weapon";

export type PlayerInventory = {
	playerEquipment: PlayerEquipment;
	playerMaterials: PlayerMaterials;
};

export type PlayerEquipment = {
	meleeSlot: MeleeWeapon | undefined;
	firearmSlot: Weapon | undefined;
	utility1: Weapon | undefined;
	utility2: Weapon | undefined;
	utility3: Weapon | undefined;
	utility4: Weapon | undefined;
};

export type PlayerMaterials = {
	clothPiece: number;
	razorBlades: number;
	oilBottle: number;
	soulStones: number;
};
