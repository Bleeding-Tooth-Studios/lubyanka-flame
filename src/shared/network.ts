import { Networking } from "@flamework/networking";
import { PlayerInventory } from "./types/types.inventory";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	requestEquipWeapon(weapon: MeleeWeapon);
	getPlayerInventory(): PlayerInventory;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
