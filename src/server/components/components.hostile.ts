import { OnPhysics, OnStart, OnTick } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { CharacterWithHumanoid } from "shared/types/types.hostile";
import { Players, Workspace } from "@rbxts/services";
import { Make } from "@rbxts/altmake";
import { atom, peek, subscribe } from "@rbxts/charm";
import { Events, Functions } from "server/network";

@Component({
	tag: "hostile-npc",
})
export class HostileComponent extends BaseComponent<{}, CharacterWithHumanoid> implements OnStart, OnTick {
	public aggroTarget = atom<CharacterWithHumanoid | undefined>(
		Workspace.WaitForChild("leon31323") as CharacterWithHumanoid,
	);

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
		this.instance.Humanoid.AutoRotate = false;

		const t = peek(this.aggroTarget) ?? error(`No current target`);
		const p = Players.GetPlayerFromCharacter(t) ?? error(`No player associated with ${t.Name}`);
		Events.bindHostileRender(p, this.instance, t);

		for (const v of t.GetDescendants()) {
			if (v.IsA("BasePart")) {
				v.SetNetworkOwner(p);
				print(`setting ${v.Name} to player ${p.Name}`);
			}
		}

		subscribe(this.aggroTarget, (currentTarget, prevTarget) => {
			const t = currentTarget;
			if (t) {
				const p = Players.GetPlayerFromCharacter(t) ?? error(`No player associated with ${t.Name}`);
				Events.bindHostileRender(p, this.instance, t);
				for (const v of t.GetDescendants()) {
					if (v.IsA("BasePart")) {
						v.SetNetworkOwner(p);
					}
				}
			} else {
			}
		});
	}

	onTick(): void {
		const currentAggroTarget = peek(this.aggroTarget);
	}
}
