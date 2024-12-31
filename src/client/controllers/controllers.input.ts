import { Controller, OnStart } from "@flamework/core";
import { CenturionUI } from "@rbxts/centurion-ui";
import { Context } from "@rbxts/gamejoy";

@Controller()
export class InputController implements OnStart {
	public DeveloperContext = new Context({
		ActionGhosting: 0,
		OnBefore: () => true,
		Process: false,
		RunSynchronously: false,
	});

	onStart(): void {
		print("Input Controller started");

		this.DeveloperContext.Bind("Backquote", () => {
			CenturionUI.setVisible(true);
		});
	}
}
