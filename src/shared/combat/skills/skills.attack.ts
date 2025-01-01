import { Visualize } from "@rbxts/visualize";
import { Skill, SkillDecorator } from "@rbxts/wcs";
import { createBloodParticle } from "shared/util/util.blood-particle";
import { castCameraArc } from "shared/util/util.camera-arc";

@SkillDecorator
export class Attack extends Skill {
	protected OnStartClient(): void {}
}
