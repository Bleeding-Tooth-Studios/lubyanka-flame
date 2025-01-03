import { MeleeWeaponStats } from "shared/types/types.weapon-stats";

const weaponStats: MeleeWeaponStats = {
	meta: {
		name: "Axe",
		description: "It takes something more than intelligence to act intelligently.",
		weldParent: "Right Arm",
	},

	meleeStats: {
		lightDmg: 25,
		heavyDmg: 65,
		attackCooldown: 2,
	},
};

export default weaponStats;
