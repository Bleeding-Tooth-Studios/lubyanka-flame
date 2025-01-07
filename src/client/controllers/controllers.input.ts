import { Controller, OnStart } from "@flamework/core";
import { CenturionUI } from "@rbxts/centurion-ui";
import { Context } from "@rbxts/gamejoy";

@Controller()
export class InputController implements OnStart {
	public developerContext = new Context({
		ActionGhosting: 0,
		OnBefore: () => true,
		Process: false,
		RunSynchronously: false,
	});

	public ingameContext = new Context();

	onStart(): void {
		print("Input Controller started");

		this.developerContext.Bind("Backquote", () => {
			CenturionUI.setVisible(true);
		});
	}
}
