import { CenturionType, Command, CommandContext, Group, Register } from "@rbxts/centurion";
import { subtitlesQueue } from "client/states/states.subtitles";
import { COLORS } from "client/ui/uiconsts/uiconsts.colors";

@Register()
export class SubtitleCommand {
	@Command({
		name: "say",
		description: "Adds a line of dialog to the subtitles",
		arguments: [
			{
				name: "text",
				description: "The text to display on the subtitle",
				optional: false,
				type: CenturionType.String,
			},
		],
	})
	say(ctx: CommandContext, text: string, color: Color3) {
		subtitlesQueue((prev) => {
			const newQueue = table.clone(prev);
			newQueue.push({
				text: text,
				color: COLORS.WHITE,
				duration: 5,
				timeApplied: os.time(),
			});

			return newQueue;
		});
	}
}
