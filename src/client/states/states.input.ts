import { atom } from "@rbxts/charm";
import { KeybindEntries } from "client/types/types.input";

const DEFAULT_KEYBINDS: KeybindEntries = {
	lAttackKey: "MouseButton1",
	hAttackKey: "MouseButton2",
	dashKey: "f",
	shoveKey: "q",
	interactKey: "e",
	meleeSlotKey: "1",
	gunSlotKey: "2",
	itemSlot1Key: "3",
	itemSlot2Key: "4",
	itemSlot3Key: "5",
	itemSlot4Key: "6",
	openConsoleKey: "Backquote",
	openInventoryKey: "b",
	ingameMenuKey: "Tab",
	markPointKey: "z",
};

export const clientKeybinds = atom<KeybindEntries>(DEFAULT_KEYBINDS);
