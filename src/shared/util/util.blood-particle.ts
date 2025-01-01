import { Debris, ReplicatedStorage, Workspace } from "@rbxts/services";

const Part = new Instance("Part");
Part.Name = "BloodParticle";
Part.AssemblyLinearVelocity = new Vector3(0, 25, 0);
Part.BottomSurface = Enum.SurfaceType.Smooth;
Part.CanCollide = false;
Part.CanQuery = false;
Part.CanTouch = false;
Part.Color = Color3.fromRGB(0, 0, 0);
Part.EnableFluidForces = false;
Part.Size = new Vector3(0.25, 0.25, 0.25);
Part.TopSurface = Enum.SurfaceType.Smooth;
Part.Transparency = 1;
Part.Parent = ReplicatedStorage;

const Attachment0 = new Instance("Attachment");
Attachment0.Name = "Attachment0";
Attachment0.Position = new Vector3(0.125, 0.125, 0.125);
Attachment0.CFrame = CFrame.fromOrientation(math.rad(0), math.rad(0), math.rad(0)).add(
	new Vector3(0.125, 0.125, 0.125),
);
Attachment0.Parent = Part;

const Attachment1 = new Instance("Attachment");
Attachment1.Name = "Attachment1";
Attachment1.Position = new Vector3(-0.125, -0.125, -0.125);
Attachment1.CFrame = CFrame.fromOrientation(math.rad(0), math.rad(0), math.rad(0)).add(
	new Vector3(-0.125, -0.125, -0.125),
);
Attachment1.Parent = Part;

const Trail = new Instance("Trail");
Trail.Attachment0 = Attachment0;
Trail.Attachment1 = Attachment1;
Trail.Color = new ColorSequence([
	new ColorSequenceKeypoint(0, Color3.fromRGB(121, 0, 0)),
	new ColorSequenceKeypoint(1, Color3.fromRGB(121, 0, 0)),
]);
Trail.FaceCamera = true;
Trail.Lifetime = 0.5;
Trail.LightInfluence = 1;
Trail.MaxLength = 7;
Trail.Texture = "rbxassetid://12206409737";
Trail.Transparency = new NumberSequence([new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 1, 0)]);
Trail.WidthScale = new NumberSequence([new NumberSequenceKeypoint(0, 1, 0), new NumberSequenceKeypoint(1, 0, 0)]);
Trail.Parent = Part;

export function createBloodParticle(position: Vector3, minVelocity: number, maxVelocity: number) {
	const clone = Part.Clone();
	clone.AssemblyLinearVelocity = new Vector3(
		math.random(minVelocity * -1, maxVelocity),
		math.random(minVelocity, maxVelocity),
		math.random(minVelocity * -1, maxVelocity),
	);
	clone.Position = position;
	clone.Parent = Workspace;

	Debris.AddItem(clone, 1);
}
