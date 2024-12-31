import { Atom, atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";

export const subtitlesQueue = atom<SubtitleData[]>([]);
