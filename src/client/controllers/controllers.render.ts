import { Controller, OnStart } from "@flamework/core";
import { Signal } from "@rbxts/beacon";
import Maid from "@rbxts/maid";
import { HttpService, RunService } from "@rbxts/services";
import { Events, Functions } from "client/network";

@Controller({})
export class ControllersRender implements OnStart {
	private _getSafePosition(aggroPosition: Vector3, aiPosition: Vector3): Vector3 {
		if (!aggroPosition) return aiPosition; // Fallback in case the player has no character

		// Direction vector from AI to Player
		const direction = aggroPosition.sub(aiPosition);

		// Normalize it (convert to unit vector)
		const normalizedDirection = direction.Unit;

		// Move 3 studs closer to AI
		const safePosition = aggroPosition.sub(normalizedDirection.mul(3));

		return safePosition;
	}

	onStart() {
		Events.bindHostileRender.connect((hostile, target) => {
			const signal = new Signal<string>();
			const maid = new Maid();
			const guidID = HttpService.GenerateGUID();
			RunService.BindToRenderStep(guidID, Enum.RenderPriority.Character.Value + 1, () => {
				const currentAggroTarget = target;
				if (currentAggroTarget && currentAggroTarget.PrimaryPart && hostile.HumanoidRootPart) {
					const aggroTargetPart = currentAggroTarget.PrimaryPart;
					const npcRootPart = hostile.HumanoidRootPart;

					hostile.Humanoid.MoveTo(
						this._getSafePosition(aggroTargetPart.Position, npcRootPart.Position),
						aggroTargetPart,
					);

					print(`${hostile.Name} is now..`);
				}
				hostile.HumanoidRootPart.Orientation = hostile.HumanoidRootPart.Orientation.add(new Vector3(0, 15, 0));
			});
			maid.GiveTask(() => {
				RunService.UnbindFromRenderStep(guidID);
			});
			signal.Connect(() => {
				maid.DoCleaning();
			});
		});
	}
}
