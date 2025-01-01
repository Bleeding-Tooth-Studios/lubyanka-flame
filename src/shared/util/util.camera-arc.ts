import { Workspace } from "@rbxts/services";
import { Visualize } from "@rbxts/visualize";

export interface CameraArcParams {
	angle: [number, number];
	range: number; // Range of each ray
	segments: number; // Number of rays in the arc
	ignoreList?: Instance[]; // Optional: Instances to ignore in raycasting
	time?: number;
}

/**
 * Casts rays in an arc using CFrame input and returns the results.
 */
export function castCameraArc(
	params: CameraArcParams,
	callback: (result: RaycastResult) => void,
	humanoidCallback: (result: RaycastResult, humanoid: Humanoid) => void,
): void {
	const camera = Workspace.CurrentCamera;

	if (!camera) error("No current camera!");

	const raycastParams = new RaycastParams();
	raycastParams.FilterDescendantsInstances = params.ignoreList ?? [];
	raycastParams.FilterType = Enum.RaycastFilterType.Blacklist;

	const halfAngleX = params.angle[0] / 2;
	const angleStepX = params.angle[0] / (params.segments - 1);

	const halfAngleY = params.angle[1] / 2;
	const angleStepY = params.angle[1] / (params.segments - 1);

	const delayBetweenCasts = params.time !== undefined ? params.time / params.segments : undefined;

	for (let i = 0; i < params.segments; i++) {
		// Calculate the direction for each ray
		const angleOffsetX = -halfAngleX + i * angleStepX;
		const angleOffsetY = -halfAngleY + i * angleStepY; // Spread rays across the arc
		const rotatedCFrame = camera.CFrame.mul(CFrame.Angles(math.rad(angleOffsetX), math.rad(angleOffsetY), 0));
		const direction = rotatedCFrame.LookVector.mul(params.range); // Scale direction by range

		// Cast the ray
		const rayResult = Workspace.Raycast(camera.CFrame.Position, direction, raycastParams);
		Visualize.point(direction.add(camera.CFrame.Position), Color3.fromRGB(0, 0, 255));
		if (rayResult) {
			const character = rayResult.Instance.FindFirstAncestorOfClass("Model");
			const humanoid = character?.FindFirstChildOfClass("Humanoid");

			if (character && humanoid) {
				raycastParams.AddToFilter(character);
				humanoidCallback(rayResult, humanoid);
				print(`Excluding character: ${character.Name}`);
			} else {
				raycastParams.AddToFilter(rayResult.Instance);
				callback(rayResult);
			}
		}

		if (delayBetweenCasts !== undefined) wait(delayBetweenCasts);
		else continue;
	}
}
