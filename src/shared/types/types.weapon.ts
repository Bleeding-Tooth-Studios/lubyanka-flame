export type Weapon = Model & {
	WeaponHandle: BasePart & {
		EquipWeld: Motor6D;
	};
};
