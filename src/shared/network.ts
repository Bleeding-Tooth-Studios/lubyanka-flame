import { Networking } from "@flamework/networking";
import { PlayerInventory } from "./types/types.inventory";
import { MeleeWeapon } from "./types/types.melee-weapon";
import { Weapon } from "./types/types.weapon";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	requestEquipWeapon(weapon: Weapon): Weapon;
	requestEquipSlot(slot: keyof PlayerInventory): Weapon;
	getPlayerInventory(): PlayerInventory;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
