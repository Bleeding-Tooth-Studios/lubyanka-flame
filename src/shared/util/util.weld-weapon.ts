import { setTimeout } from "@rbxts/set-timeout";
import { Weapon } from "shared/types/types.weapon";
import { WeaponData } from "shared/types/types.weapon-stats";

export function weldWeapon(weapon: Weapon, part: BasePart) {
	weapon.WeaponHandle.EquipWeld.Part0 = part;
	weapon.WeaponHandle.EquipWeld.Part1 = weapon.WeaponHandle;
}
