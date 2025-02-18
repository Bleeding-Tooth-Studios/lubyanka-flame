import { subscribe } from "@rbxts/charm";
import { Context } from "@rbxts/gamejoy";
import { Dynamic } from "@rbxts/gamejoy/out/Actions";
import { AnyAction } from "@rbxts/gamejoy/out/Definitions/Types";
import { Players } from "@rbxts/services";
import { clientGameState } from "client/states/states.game";
import { clientKeybinds } from "client/states/states.input";
import { InputDynamics, KeybindEntries } from "client/types/types.input";

export const INPUT_CONTEXTS = {
	DEV: new Context({
		// The dev context represents developer functions etc and is always active besides when loading
		OnBefore() {
			return !!(clientGameState() === "Loading");
		},
	}),

	INGAME: new Context({
		// The ingame context represents when the player is in game but might not be spawned
		OnBefore() {
			return clientGameState() === "Ingame";
		},
	}),

	SPECTATING: new Context({
		// The ingame context represents when player is spectating
		OnBefore() {
			return clientGameState() === "Spectating";
		},
	}),

	CHARACTER: new Context({
		// The ingame context represents when player is controlling a character
		OnBefore() {
			return !!Players.LocalPlayer.Character;
		},
	}),
};

export const INPUT_DYNAMICS: InputDynamics = {
	DEV: {
		openConsole: new Dynamic<AnyAction>("4"),
	},
	INGAME: {
		openInventory: new Dynamic<AnyAction>("4"),
		ingameMenu: new Dynamic<AnyAction>("4"),
		markPoint: new Dynamic<AnyAction>("4"),
	},
	SPECTATING: {
		prevPlayer: new Dynamic<AnyAction>("4"),
		nextPlayer: new Dynamic<AnyAction>("4"),
	},
	CHARACTER: {
		lAttack: new Dynamic<AnyAction>("4"),
		hAttack: new Dynamic<AnyAction>("4"),
		dash: new Dynamic<AnyAction>("4"),
		shove: new Dynamic<AnyAction>("4"),
		interact: new Dynamic<AnyAction>("4"),
		meleeSlot: new Dynamic<AnyAction>("4"),
		gunSlot: new Dynamic<AnyAction>("4"),
		itemSlot1: new Dynamic<AnyAction>("4"),
		itemSlot2: new Dynamic<AnyAction>("4"),
		itemSlot3: new Dynamic<AnyAction>("4"),
		itemSlot4: new Dynamic<AnyAction>("4"),
	},
};

export function updateKeybinds(keybindData: KeybindEntries) {
	INPUT_DYNAMICS.DEV.openConsole.Update(keybindData.openConsoleKey);

	INPUT_DYNAMICS.SPECTATING.prevPlayer.Update(keybindData.hAttackKey);
	INPUT_DYNAMICS.SPECTATING.nextPlayer.Update(keybindData.lAttackKey);

	INPUT_DYNAMICS.CHARACTER.lAttack.Update(keybindData.lAttackKey);
	INPUT_DYNAMICS.CHARACTER.hAttack.Update(keybindData.hAttackKey);
	INPUT_DYNAMICS.CHARACTER.dash.Update(keybindData.dashKey);
	INPUT_DYNAMICS.CHARACTER.shove.Update(keybindData.shoveKey);
	INPUT_DYNAMICS.CHARACTER.interact.Update(keybindData.interactKey);
	INPUT_DYNAMICS.CHARACTER.meleeSlot.Update(keybindData.meleeSlotKey);
	INPUT_DYNAMICS.CHARACTER.gunSlot.Update(keybindData.gunSlotKey);
	INPUT_DYNAMICS.CHARACTER.itemSlot1.Update(keybindData.itemSlot1Key);
	INPUT_DYNAMICS.CHARACTER.itemSlot2.Update(keybindData.itemSlot2Key);
	INPUT_DYNAMICS.CHARACTER.itemSlot3.Update(keybindData.itemSlot3Key);
	INPUT_DYNAMICS.CHARACTER.itemSlot4.Update(keybindData.itemSlot4Key);

	INPUT_DYNAMICS.INGAME.openInventory.Update(keybindData.openInventoryKey);
	INPUT_DYNAMICS.INGAME.ingameMenu.Update(keybindData.ingameMenuKey);
	INPUT_DYNAMICS.INGAME.markPoint.Update(keybindData.markPointKey);
}

updateKeybinds(clientKeybinds());

const inputWatcher = subscribe(clientKeybinds, (state) => {
	updateKeybinds(state);
});
