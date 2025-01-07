import { atom } from "@rbxts/charm";
import { SubtitleData } from "shared/types/types.subtitle";

/**
 * A queue (array) of all the subtitles pending. 1 = top, 5 = bottom. Use unshift on the array to insert at the top.
 */
export const subtitlesQueue = atom<SubtitleData[]>([]);
