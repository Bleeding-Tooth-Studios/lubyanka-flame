import { Weapon } from "./types.weapon";

export type MeleeWeapon = Weapon & {
	DamagePart: BasePart;
	Anims: Folder & {
		HAttackStart: Animation;
		HAttackCharge: Animation;
		LAttack: Animation;
		HAttackHit: Animation;
		WeaponIdle: Animation;
	};
};
