import { Players } from "@rbxts/services";
import { Character } from "@rbxts/wcs";

export function getWCSCharacter() {
	print("scannig");
	const characterModel = Players.LocalPlayer.Character;
	if (!characterModel) return;

	return Character.GetCharacterFromInstance(characterModel);
}
