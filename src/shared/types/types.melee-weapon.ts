export type MeleeWeapon = Model & {
	AxeHead: MeshPart;
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
};
