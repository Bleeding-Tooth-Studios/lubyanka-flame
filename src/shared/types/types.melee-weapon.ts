import { WeaponInstance as WeaponInstance } from "./types.weapon";

export type MeleeWeaponInstance = WeaponInstance & {
	DamagePart: MeshPart;
	Anims: Folder & {
		HAttackStart: Animation;
		HAttackCharge: Animation;
		LAttack: Animation;
		HAttackHit: Animation;
		WeaponIdle: Animation;
	};
	WeaponHandle: MeshPart & {
		WeldConstraint: WeldConstraint;
		EquipWeld: Motor6D;
	};
	meleeStats: ModuleScript;
};
