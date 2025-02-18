import { AnyAction, RawActionEntry } from "@rbxts/gamejoy";
import { Dynamic } from "@rbxts/gamejoy/out/Actions";

export type KeybindEntry = {
	name: string;
	desc: string;
	bind: RawActionEntry;
};

export interface KeybindEntries {
	lAttackKey: RawActionEntry;
	hAttackKey: RawActionEntry;
	interactKey: RawActionEntry;
	meleeSlotKey: RawActionEntry;
	gunSlotKey: RawActionEntry;
	itemSlot1Key: RawActionEntry;
	itemSlot2Key: RawActionEntry;
	itemSlot3Key: RawActionEntry;
	itemSlot4Key: RawActionEntry;
	openConsoleKey: RawActionEntry;
	openInventoryKey: RawActionEntry;
	ingameMenuKey: RawActionEntry;
	markPointKey: RawActionEntry;
	dashKey: RawActionEntry;
	shoveKey: RawActionEntry;
}

export type InputDynamics = {
	DEV: {
		openConsole: Dynamic<AnyAction>;
	};

	INGAME: {
		openInventory: Dynamic<AnyAction>;
		ingameMenu: Dynamic<AnyAction>;
		markPoint: Dynamic<AnyAction>;
	};

	SPECTATING: {
		prevPlayer: Dynamic<AnyAction>;
		nextPlayer: Dynamic<AnyAction>;
	};

	CHARACTER: {
		lAttack: Dynamic<AnyAction>;
		hAttack: Dynamic<AnyAction>;
		dash: Dynamic<AnyAction>;
		shove: Dynamic<AnyAction>;
		interact: Dynamic<AnyAction>;
		meleeSlot: Dynamic<AnyAction>;
		gunSlot: Dynamic<AnyAction>;
		itemSlot1: Dynamic<AnyAction>;
		itemSlot2: Dynamic<AnyAction>;
		itemSlot3: Dynamic<AnyAction>;
		itemSlot4: Dynamic<AnyAction>;
	};
};
