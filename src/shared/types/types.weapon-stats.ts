import { CharacterRigR6 } from "@rbxts/promise-character";
import { KeysOfType } from "shared/util/util.type-utils";

export type WeaponMetadata = {
	meta: {
		name: string;
		description: string;
		weldParent: KeysOfType<CharacterRigR6, BasePart>;
	};
};

export type MeleeWeaponStats = WeaponMetadata & {
	meleeStats: {
		lightDmg: number;
		heavyDmg: number;
		attackCooldown: number;
	};
};
