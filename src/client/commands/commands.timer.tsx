import { CenturionUI } from "@rbxts/centurion-ui";
import { Centurion,CenturionType,Command, CommandContext, Register } from "@rbxts/centurion";
import { CENTURION_CLIENT } from "client/consts/consts.centurion";
import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { TimerText } from "client/ui/uicomponents/Timer";
import { timerSeconds } from "client/states/states.time";

@Register()
export class timerCommand {
    @Command({
    name: "timer",
    description: "Starts a timer.",
    arguments: [
        {
            name: "secondsElapsed",
            description: "Seconds already elapsed",
            type: CenturionType.Number
        }
    ],
})
    timer(ctx: CommandContext, seconds: number){
        <TimerText totalSeconds={seconds}/>
        print("timer command")
    }
}