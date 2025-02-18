import { atom } from "@rbxts/charm";
import { GameState } from "shared/types/types.gamestate";

export const clientGameState = atom<GameState>("Ingame");
