import {InstanceProps, ReactNode} from "@rbxts/react";
import React from "@rbxts/react";
import { ANCHORS, POSITIONSCALES } from "../uiconsts/uiconsts.util";
import { TEXT_STYLES } from "../uiconsts/uiconsts.textstyles";
import { useTimer } from "@rbxts/pretty-react-hooks";
import { toBinding } from "@rbxts/pretty-react-hooks";


//formatSeconds(2,40) --> count down from 00:38
//formatSeconds(0,70) --> count down from 01:10
function formatSeconds(elapsedSeconds: number, totalSeconds: number): string {
    // Calculate remaining time
    const remainingTime = totalSeconds - elapsedSeconds;
    if (remainingTime < 0 ){
        return ""
    }

    // Calculate minutes and seconds
    const minutes = math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Format minutes and seconds with leading zeros
    const formattedMinutes = minutes < 10 ? "0" + minutes : tostring(minutes) 
    const formattedSeconds = seconds < 10 ? "0" + seconds : tostring(seconds) 

    return (formattedMinutes+":"+formattedSeconds);
}

export function TimerText(props:{
    totalSeconds: number;
}): ReactNode {

    const timer = useTimer()
    const second = toBinding(timer.value.map((value) => ))
    timer.start
    return(
        <textlabel
            key="TimerText"
            {...TEXT_STYLES.MEDIUM}
            Text={timer.value.map((value) => formatSeconds((math.floor(value)),5))}
            BackgroundColor3={Color3.fromRGB(255, 0, 0)}
			TextColor3={Color3.fromRGB(255, 255, 255)}
            AnchorPoint={ANCHORS.CENTER_TOP}
            Position={POSITIONSCALES.CENTER_TOP}
        />
    )
}
