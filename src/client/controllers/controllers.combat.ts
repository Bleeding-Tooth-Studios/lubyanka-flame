import { Controller, OnRender, OnStart } from "@flamework/core";
import { Debris, Players, ReplicatedStorage, UserInputService } from "@rbxts/services";
import { Character, CreateClient } from "@rbxts/wcs";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { Attack } from "shared/combat/skills/skills.attack";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { InputController } from "./controllers.input";
import { castCameraArc } from "shared/util/util.camera-arc";
import { Visualize } from "@rbxts/visualize";
import { Make } from "@rbxts/altmake";
import { size } from "@rbxts/gamejoy/out/Misc/Aliases";
import { createBloodParticle } from "shared/util/util.blood-particle";

function getCurrentWCS_Character() {
	print("scannig");
	const characterModel = Players.LocalPlayer.Character;
	if (!characterModel) return;

	return Character.GetCharacterFromInstance(characterModel);
}

@Controller({})
export class CombatController implements OnStart, OnRender {
	constructor(private readonly inputController: InputController) {}

	onStart() {
		const Client = CreateClient();

		Client.RegisterDirectory(MOVESETS_FOLDER);
		Client.RegisterDirectory(SKILLS_FOLDER);
		Client.RegisterDirectory(STATUSEFFECTS_FOLDER);

		Client.Start();

		this.inputController.DeveloperContext.Bind(["E"], () => {
			const character = getCurrentWCS_Character();
			if (!character) error("No WCS handle found for this character");

			character.GetSkillFromConstructor(Attack)?.Start();

			// Cast rays in an arc
			castCameraArc(
				{
					angle: [45, 45],
					range: 5,
					segments: 10,
					ignoreList: [game.GetService("Players").LocalPlayer.Character!],
					time: 0.5,
				},
				(result) => {
					Visualize.point(result.Position, Color3.fromRGB(255, 255, 0));
				},
				(result, humanoid) => {
					Visualize.point(result.Position, Color3.fromRGB(255, 0, 0));
					createBloodParticle(result.Position, 20, 25);
					humanoid.TakeDamage(25);
				},
			);
		});
	}

	onRender(dt: number): void {}
}
