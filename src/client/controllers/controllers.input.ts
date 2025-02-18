import { Controller, OnStart } from "@flamework/core";
import { CenturionUI } from "@rbxts/centurion-ui";
import { INPUT_CONTEXTS, INPUT_DYNAMICS } from "client/consts/consts.input";
import { KeybindEntries } from "client/types/types.input";

@Controller()
export class InputController implements OnStart {
	onStart(): void {
		INPUT_CONTEXTS.DEV.Bind(INPUT_DYNAMICS.DEV.openConsole, () => {
			CenturionUI.setVisible(true);
		});

		print("Input Controller started");
	}
}
