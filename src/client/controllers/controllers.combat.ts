import { Controller, OnRender, OnStart } from "@flamework/core";
import { Players, ReplicatedStorage, UserInputService } from "@rbxts/services";
import { Character, CreateClient } from "@rbxts/wcs";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { Attack } from "shared/combat/skills/skills.attack";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { InputController } from "./controllers.input";
import { Visualize } from "@rbxts/visualize";
import { castArcRay } from "shared/util/util.arc-ray";

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
		});
	}

	onRender(dt: number): void {}
}
