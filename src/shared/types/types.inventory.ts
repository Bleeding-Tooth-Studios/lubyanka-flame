import { MeleeWeapon } from "./types.melee-weapon";
import { Weapon } from "./types.weapon";

export type PlayerInventory = {
	meleeSlot: MeleeWeapon | undefined;
	firearmSlot: Weapon | undefined;
	razors: number;
	utility1: Weapon | undefined;
	utility2: Weapon | undefined;
	utility3: Weapon | undefined;
	utility4: Weapon | undefined;
};
