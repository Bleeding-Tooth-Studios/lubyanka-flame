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
		// Define the starting CFrame (position and orientation)
		const originCFrame = new CFrame(new Vector3(0, 5, 0), new Vector3(0, 5, 1)); // Facing forward

		// Cast rays in an arc
		const results = castArcRay({
			cframe: originCFrame, // Starting CFrame
			angle: 45, // Total arc angle (degrees)
			range: 5, // Max range of each ray
			segments: 10, // Number of rays in the arc
			ignoreList: [game.GetService("Players").LocalPlayer.Character!], // Optional
		});

		// Process the results
		for (const result of results) {
			print("Hit:", result.Instance.Name, "at", result.Position);
		}
	}
}
