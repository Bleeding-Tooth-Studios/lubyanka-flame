import { PlayerMaterials, PlayerEquipment } from "./types.inventory";
import { WeaponInstance } from "./types.weapon";

export type ProfileData = {
	rank: number;
	money: number;
};

export type PlayerInventory = {
	playerEquipment: PlayerEquipment;
	playerMaterials: PlayerMaterials;
	equippedWeapon: WeaponInstance | undefined;
};
