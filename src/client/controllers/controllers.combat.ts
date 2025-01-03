import { Controller, OnRender, OnStart } from "@flamework/core";
import { Debris, Players, ReplicatedStorage, UserInputService } from "@rbxts/services";
import { Character, CreateClient } from "@rbxts/wcs";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { Attack } from "shared/combat/skills/skills.attack";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { InputController } from "./controllers.input";
import { Animation } from "@rbxts/animation";
import { CharacterRigR6 } from "@rbxts/promise-character";
import { Functions } from "client/network";
import { subtitlesQueue } from "client/states/states.subtitles";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { getWCSCharacter } from "client/util/util.get-wcs-character";

@Controller({})
export class CombatController implements OnStart, OnRender {
	constructor(private readonly inputController: InputController) {}

	onStart() {
		const Client = CreateClient();

		Client.RegisterDirectory(MOVESETS_FOLDER);
		Client.RegisterDirectory(SKILLS_FOLDER);
		Client.RegisterDirectory(STATUSEFFECTS_FOLDER);

		Client.Start();

		const bundle = Animation.createAnimations({
			idle: "rbxassetid://126748553326889",
			axe_swing: "rbxassetid://78432586847389",
		});

		this.inputController.DeveloperContext.Bind(["E"], () => {
			const character = getWCSCharacter();
			if (!character) error("No WCS handle found for this character");
			character.GetSkillFromConstructor(Attack)?.Start();

			Animation.loadAnimator((character.Instance as CharacterRigR6).Humanoid.Animator, bundle).axe_swing.Play();
		});

		this.inputController.DeveloperContext.Bind(["Q"], () => {
			Functions.requestEquipSlot("meleeSlot");

			subtitlesQueue((prev) => {
				const newQueue = table.clone(prev);
				newQueue.push({
					text: "The axe reeks of punishment.",
					color: COLORS.WHITE,
					duration: 5,
					timeApplied: os.time(),
				});

				return newQueue;
			});
		});
	}

	onRender(dt: number): void {}
}
