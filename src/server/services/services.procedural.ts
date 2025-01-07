import { OnStart, Service } from "@flamework/core";
import { Clone } from "@rbxts/altmake";
import { Centurion } from "@rbxts/centurion";
import { Workspace, ReplicatedStorage } from "@rbxts/services";

@Service()
export class ProceduralService implements OnStart {
    onStart(): void {
        
        const hallsFolder = ReplicatedStorage.WaitForChild("hallways") as Folder //folder containing halls
        const hallsFolderCopy = hallsFolder.Clone();
        const halls = hallsFolderCopy.GetChildren() as Instance[];
        
        let red;
        let i: number = 0;

        for (i; i < 5; i++){
            let j = i%4
            let green = halls[j].FindFirstChild("green") as Part;
            
                if (red && green) {
                    halls[j].Parent = Workspace
                    green.CFrame = red.CFrame;
                }
            red = halls[j].FindFirstChild("red") as Part;
        }
    }
}