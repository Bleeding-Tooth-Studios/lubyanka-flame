import { CenturionType, Command, CommandContext, Group, Register } from "@rbxts/centurion";

@Register()
export class DevCommand {
	@Command({
		name: "test",
		description: "Prints 'test' + string argument to the console",
		arguments: [
			{
				name: "testString",
				description: "The string argument to append to 'test'",
				optional: true,
				type: CenturionType.String,
			},
		],
	})
	test(ctx: CommandContext, testString?: string) {
		testString = testString !== undefined ? " " + testString : "";
		ctx.reply("test" + testString);
	}
}
