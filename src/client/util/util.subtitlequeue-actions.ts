import { subtitlesQueue } from "client/states/states.subtitles";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";
import { SubtitleData } from "shared/types/types.subtitle";

export namespace SubtitleQueueActions {
	export function pushDialog(subtitle: SubtitleData) {
		subtitlesQueue((prev) => {
			const newQueue = table.clone(prev);
			newQueue.unshift(subtitle);

			return newQueue;
		});
	}
}
