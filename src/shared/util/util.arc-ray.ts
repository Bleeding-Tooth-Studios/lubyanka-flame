import { Workspace } from "@rbxts/services";
import { Visualize } from "@rbxts/visualize";

interface ArcRayParams {
	origin: Vector3; // Starting position of the arc
	direction: Vector3; // Forward direction
	angle: number; // Total arc angle in degrees
	range: number; // Range of each ray
	segments: number; // Number of rays in the arc
	ignoreList?: Instance[]; // Optional: Instances to ignore in raycasting
}

/**
 * Casts rays in an arc and returns the hits.
 */
export function castArcRay(params: ArcRayParams): RaycastResult[] {
	const results: RaycastResult[] = [];
	const raycastParams = new RaycastParams();
	raycastParams.FilterDescendantsInstances = params.ignoreList ?? [];
	raycastParams.FilterType = Enum.RaycastFilterType.Exclude;

	const halfAngle = params.angle / 2;
	const angleStep = params.angle / (params.segments - 1);

	for (let i = 0; i < params.segments; i++) {
		// Calculate the direction of each ray
		const angleOffset = -halfAngle + i * angleStep;
		const rotatedDirection = params.direction.mul(CFrame.Angles(0, math.rad(angleOffset), 0).LookVector);
		const rayDestination = params.origin.add(rotatedDirection.mul(params.range));

		// Cast the ray
		const rayResult = Workspace.Raycast(params.origin, rayDestination.sub(params.origin), raycastParams);
		print(`Some things you can't change: ${angleOffset}`);
		Visualize.line(params.origin, rayDestination);
		if (rayResult) {
			results.push(rayResult);
		}
	}

	return results;
}
