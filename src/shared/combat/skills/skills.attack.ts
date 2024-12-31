import { Visualize } from "@rbxts/visualize";
import { Skill, SkillDecorator } from "@rbxts/wcs";
import { castArcRay } from "shared/util/util.arc-ray";

@SkillDecorator
export class Attack extends Skill {
	protected OnConstructServer(): void {
		print("I died on the server, white, like snow");
	}

	protected OnConstructClient(): void {
		print("I died on the client, black, like ash");
	}

	protected OnStartClient(): void {
		const origin = new Vector3(0, 3, 0);
		const forwardDirection = new Vector3(0, 0, 1);
		const results = castArcRay({
			origin: origin,
			direction: forwardDirection,
			angle: 135, // Total arc angle (degrees)
			range: 5, // Max range of each ray
			segments: 10, // Number of rays in the arc
		});

		for (const result of results) {
			Visualize.point(origin);
			Visualize.line(origin, result.Position);
		}
	}
}
