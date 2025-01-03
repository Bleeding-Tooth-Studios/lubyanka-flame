export type Weapon = Model & {
	WeaponHandle: MeshPart & {
		EquipWeld: Motor6D;
	};
	weaponData: ModuleScript;
};
