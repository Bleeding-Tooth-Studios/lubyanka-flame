import { Networking } from "@flamework/networking";
import { PlayerEquipment, PlayerInventory } from "./types/types.inventory";
import { WeaponInstance } from "./types/types.weapon";
import { CharacterWithHumanoid } from "./types/types.hostile";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	bindHostileRender(hostile: CharacterWithHumanoid, target: CharacterWithHumanoid): void; //returns a signal that is used to end the connection
}

interface ClientToServerFunctions {
	equipSlot(slot: keyof PlayerEquipment): WeaponInstance;
	readPlayerInventory(): PlayerInventory;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
