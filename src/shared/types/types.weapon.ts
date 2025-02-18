export type WeaponInstance = Model & {
	WeaponHandle: MeshPart & {
		EquipWeld: Motor6D;
	};
	weaponData: ModuleScript;
};
