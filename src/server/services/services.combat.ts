import { OnStart, Service } from "@flamework/core";
import { CreateServer } from "@rbxts/wcs";
import { MOVESETS_FOLDER } from "shared/combat/movesets";
import { SKILLS_FOLDER } from "shared/combat/skills";
import { STATUSEFFECTS_FOLDER } from "shared/combat/status-effects";
import { Players } from "@rbxts/services";
import { Character } from "@rbxts/wcs";
import { Attack } from "shared/combat/skills/skills.attack";

@Service({})
export class CombatService implements OnStart {
	onStart() {
		const Server = CreateServer();

		Server.RegisterDirectory(MOVESETS_FOLDER);
		Server.RegisterDirectory(SKILLS_FOLDER);
		Server.RegisterDirectory(STATUSEFFECTS_FOLDER);

		Server.Start();

		Players.PlayerAdded.Connect((Player) => {
			Player.CharacterAdded.Connect((CharacterModel) => {
				// apply the wrap when character model gets created
				const WCS_Character = new Character(CharacterModel);

				// apply our freshly made skill
				new Attack(WCS_Character);

				print(WCS_Character.Instance.Name);

				// destroy it when humanoid dies
				const humanoid = CharacterModel.WaitForChild("Humanoid") as Humanoid;
				humanoid.Died.Once(() => WCS_Character.Destroy());
			});
		});
	}
}
