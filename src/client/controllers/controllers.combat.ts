import { Controller, OnRender, OnStart } from "@flamework/core";
import { Players, ReplicatedStorage, UserInputService } from "@rbxts/services";
import { Character, CreateClient } from "@rbxts/wcs";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { Attack } from "shared/combat/skills/skills.attack";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { InputController } from "./controllers.input";
import { castCameraArc } from "client/util/util.camera-arc";
import { Visualize } from "@rbxts/visualize";

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
			const results = castCameraArc(
				{
					angleX: 45,
					angleY: 45, // Total arc angle (degrees)
					range: 5, // Max range of each ray
					segments: 10, // Number of rays in the arc
					ignoreList: [game.GetService("Players").LocalPlayer.Character!], // Optional
				},
				(result) => {
					wait(0.02);
					Visualize.point(result.Position);
				},
			);
		});
	}

	onRender(dt: number): void {}
}
