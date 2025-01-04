import { Networking } from "@flamework/networking";
import { PlayerEquipment, PlayerInventory } from "./types/types.inventory";
import { Weapon } from "./types/types.weapon";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	equipSlot(slot: keyof PlayerEquipment): Weapon;
	readPlayerInventory(): PlayerInventory;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
