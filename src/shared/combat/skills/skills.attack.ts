import { Visualize } from "@rbxts/visualize";
import { Skill, SkillDecorator } from "@rbxts/wcs";
import { castCameraArc } from "client/util/util.camera-arc";

@SkillDecorator
export class Attack extends Skill {
	protected OnConstructServer(): void {
		print("I died on the server, white, like snow");
	}

	protected OnConstructClient(): void {
		print("I died on the client, black, like ash");
	}

	protected OnStartClient(): void {}
}
