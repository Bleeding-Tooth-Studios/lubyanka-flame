import { Workspace } from "@rbxts/services";
import { Visualize } from "@rbxts/visualize";

interface CameraArcParams {
	angleX: number;
	angleY: number; // Total arc angle in degrees
	range: number; // Range of each ray
	segments: number; // Number of rays in the arc
	ignoreList?: Instance[]; // Optional: Instances to ignore in raycasting
}

/**
 * Casts rays in an arc using CFrame input and returns the results.
 */
export function castCameraArc(params: CameraArcParams, callback: (result: RaycastResult) => void): RaycastResult[] {
	const camera = Workspace.CurrentCamera;

	if (!camera) error("No current camera!");

	const results: RaycastResult[] = [];
	const raycastParams = new RaycastParams();
	raycastParams.FilterDescendantsInstances = params.ignoreList ?? [];
	raycastParams.FilterType = Enum.RaycastFilterType.Blacklist;

	const halfAngleY = params.angleY / 2;
	const angleStepY = params.angleY / (params.segments - 1);

	const halfAngleX = params.angleX / 2;
	const angleStepX = params.angleX / (params.segments - 1);

	for (let i = 0; i < params.segments; i++) {
		// Calculate the direction for each ray
		const angleOffsetX = -halfAngleX + i * angleStepX;
		const angleOffsetY = -halfAngleY + i * angleStepY; // Spread rays across the arc
		const rotatedCFrame = camera.CFrame.mul(CFrame.Angles(math.rad(angleOffsetX), math.rad(angleOffsetY), 0));
		const direction = rotatedCFrame.LookVector.mul(params.range); // Scale direction by range

		// Cast the ray
		const rayResult = Workspace.Raycast(camera.CFrame.Position, direction, raycastParams);
		if (rayResult) {
			results.push(rayResult);
			callback(rayResult);
		}
	}

	return results;
}
