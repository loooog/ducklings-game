import React, {useCallback} from "react";
import styled from "styled-components";
import {useWindowSize} from "@react-hook/window-size";
import {playerInputsState} from "../Player/state/inputs";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const getClientXY = (event: any): [number, number] | null => {
    switch (event.type) {
        case "mouseup":
        case "mousedown":
        case "mousemove":
            return [event.clientX, event.clientY]
        case "touchstart":
        case "touchend":
            return [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
        case "touchmove":
            return [event.targetTouches[0].clientX, event.targetTouches[0].clientY]
    }
    return null
}

const calcVector = ([x, y]: [number, number], center: [number, number]): [number, number] => {

    const angle = Math.atan2((x - center[0]), (y - center[1]))
    const xVector = Math.cos(angle)
    const yVector = Math.sin(angle)

    return [xVector, yVector]

}

const Inputs: React.FC = ({children}) => {

    const [
        width,
        height,
    ] = useWindowSize()

    const center: [number, number] = [width / 2, height / 2]

    const onStart = useCallback((event: any) => {
        const position = getClientXY(event)
        if (!position) return
        const vector = calcVector(position, center)
        playerInputsState.xVel = vector[0]
        playerInputsState.yVel = vector[1]
        playerInputsState.active = true
    }, [center])

    const onEnd = useCallback((event: any) => {
        const position = getClientXY(event)
        if (!position) return
        const vector = calcVector(position, center)
        playerInputsState.xVel = vector[0]
        playerInputsState.yVel = vector[1]
        playerInputsState.active = false
    }, [center])

    const onMove = useCallback((event: any) => {
        const position = getClientXY(event)
        if (!position) return
        const vector = calcVector(position, center)
        playerInputsState.xVel = vector[0]
        playerInputsState.yVel = vector[1]
    }, [center])

    return (
        <StyledContainer onTouchStartCapture={onStart} onMouseDownCapture={onStart} onTouchEndCapture={onEnd} onMouseUpCapture={onEnd} onTouchMoveCapture={onMove} onMouseMoveCapture={onMove}>
            {children}
        </StyledContainer>
    );
};

export default Inputs;