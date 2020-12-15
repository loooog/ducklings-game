import React from "react";
import styled from "styled-components";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import Inputs from "./components/Inputs/Inputs";

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
`;

const Game: React.FC = () => {
    return (
        <StyledContainer>
            <Inputs>
                <GameCanvas/>
            </Inputs>
        </StyledContainer>
    );
};

export default Game;