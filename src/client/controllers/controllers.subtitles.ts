import { Controller, OnStart, OnTick } from "@flamework/core";
import { Signal } from "@rbxts/beacon";
import { Atom, peek, subscribe } from "@rbxts/charm";
import { setInterval } from "@rbxts/set-timeout";
import { SUBTITLES_MAX_LINES } from "client/consts/consts.subtitles";
import { subtitlesQueue } from "client/states/states.subtitles";
import { SubtitleData } from "shared/types/types.subtitle";

export function pruneSubtitleQueue(subtitleQueue: Atom<SubtitleData[]>) {
	const newQueue = table.clone(peek(subtitleQueue));

	if (newQueue.isEmpty()) return;

	newQueue.forEach((queueItem, index) => {
		if (os.time() > queueItem.timeApplied + queueItem.duration || newQueue.size() > SUBTITLES_MAX_LINES) {
			newQueue.remove(index);
			subtitleQueue(newQueue);
		}
	});
}

@Controller({})
export class SubtitlesController implements OnTick {
	onTick(dt: number): void {
		pruneSubtitleQueue(subtitlesQueue);
	}
}
