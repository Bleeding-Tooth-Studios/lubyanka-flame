import { Workspace } from "@rbxts/services";
import { Visualize } from "@rbxts/visualize";

interface ArcRayParams {
	cframe: CFrame; // The CFrame representing the origin and orientation of the arc
	angle: number; // Total arc angle in degrees
	range: number; // Range of each ray
	segments: number; // Number of rays in the arc
	ignoreList?: Instance[]; // Optional: Instances to ignore in raycasting
}

/**
 * Casts rays in an arc using CFrame input and returns the results.
 */
export function castArcRay(params: ArcRayParams): RaycastResult[] {
	const results: RaycastResult[] = [];
	const raycastParams = new RaycastParams();
	raycastParams.FilterDescendantsInstances = params.ignoreList ?? [];
	raycastParams.FilterType = Enum.RaycastFilterType.Blacklist;

	const halfAngle = params.angle / 2;
	const angleStep = params.angle / (params.segments - 1);

	for (let i = 0; i < params.segments; i++) {
		// Calculate the direction for each ray
		const angleOffset = -halfAngle + i * angleStep; // Spread rays across the arc
		const rotatedCFrame = params.cframe.mul(CFrame.Angles(0, math.rad(angleOffset), 0));
		const direction = rotatedCFrame.LookVector.mul(params.range); // Scale direction by range

		// Cast the ray
		const rayResult = Workspace.Raycast(params.cframe.Position, direction, raycastParams);
		Visualize.vector(params.cframe.Position, direction);
		if (rayResult) {
			results.push(rayResult);
		}
	}

	return results;
}
