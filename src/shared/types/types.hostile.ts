import { PlayerMaterials, PlayerEquipment } from "./types.inventory";
import { WeaponInstance } from "./types.weapon";

export type CharacterWithHumanoid = Model & {
	Humanoid: Humanoid;
	HumanoidRootPart: Part;
};
