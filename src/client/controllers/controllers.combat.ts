import { Controller, OnRender, OnStart } from "@flamework/core";
import { Animation } from "@rbxts/animation";
import { CharacterRigR6 } from "@rbxts/promise-character";
import { CreateClient } from "@rbxts/wcs";
import { Functions } from "client/network";
import { subtitlesQueue } from "client/states/states.subtitles";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { getWCSCharacter } from "client/util/util.get-wcs-character";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { Attack } from "shared/combat/skills/skills.attack";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { InputController } from "./controllers.input";

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

		this.inputController.developerContext.Bind(["E"], () => {
			const character = getWCSCharacter();
			if (!character) error("No WCS handle found for this character");
			character.GetSkillFromConstructor(Attack)?.Start();

			Animation.loadAnimator((character.Instance as CharacterRigR6).Humanoid.Animator, bundle).axe_swing.Play();
		});

		this.inputController.developerContext.Bind(["Q"], () => {
			Functions.equipSlot("meleeSlot");

			subtitlesQueue((prev) => {
				const newQueue = table.clone(prev);
				newQueue.unshift({
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
