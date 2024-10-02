import React from "react";
import styled from "styled-components";
import ButtonSetModal from "./ButtonSetModal";
import { SIMPLE_BTN, GRADATION_BTN } from "../../../constant/button";
import { useSetButtonContext } from "../provider/setButtonProvider";

type SimpleBtnProps = {
    $backgroundColor: string;
    $textColor: string;
    $borderRadius: string;
}

type GrationBtnProps = {
    $gradationColor1: string;
    $gradationColor2: string;
    $gradationColor3: string;
    $gradationColor4: string;
    $textColor: string;
    $borderRadius: string;
}

function ButtonBox() {
    const buttonComponents = {
        SampleBtn:
            <SimpleBtn
                $backgroundColor={SIMPLE_BTN['backgroundColor']}
                $textColor={SIMPLE_BTN['textColor']}
                $borderRadius={SIMPLE_BTN['borderRadius']}
                target="_blank"
                onClick={(e) => {e.preventDefault()}}
            >
                {SIMPLE_BTN['text']}
            </SimpleBtn>,
        GradationBtn:
            <GradationBtn
                $textColor={GRADATION_BTN['textColor']}
                $gradationColor1={GRADATION_BTN['gradationColor1']}
                $gradationColor2={GRADATION_BTN['gradationColor2']}
                $gradationColor3={GRADATION_BTN['gradationColor3']}
                $gradationColor4={GRADATION_BTN['gradationColor4']}
                $borderRadius={GRADATION_BTN['borderRadius']}
                target="_blank"
                onClick={(e) => {e.preventDefault()}}
            >
                {GRADATION_BTN['text']}
            </GradationBtn>,
    };
    const {selectedBtn, setSelectedBtn} = useSetButtonContext()

    return (
        <ButtonBoxStyle>
            <Title>버튼 카테고리</Title>
            <div style={{height: '50px', width: '100%'}}>
                <SimpleBtn
                    $backgroundColor={SIMPLE_BTN['backgroundColor']}
                    $textColor={SIMPLE_BTN['textColor']}
                    $borderRadius={SIMPLE_BTN['borderRadius']}
                    onClick={() => setSelectedBtn('SampleBtn')}>
                    {SIMPLE_BTN['text']}
                </SimpleBtn>
            </div>
            <div style={{height: '50px', width: '100%'}}>
                <GradationBtn
                    $textColor={GRADATION_BTN['textColor']}
                    $gradationColor1={GRADATION_BTN['gradationColor1']}
                    $gradationColor2={GRADATION_BTN['gradationColor2']}
                    $gradationColor3={GRADATION_BTN['gradationColor3']}
                    $gradationColor4={GRADATION_BTN['gradationColor4']}
                    $borderRadius={GRADATION_BTN['borderRadius']}
                    onClick={() => setSelectedBtn('GradationBtn')}>
                    {GRADATION_BTN['text']}
                </GradationBtn>
            </div>
            {
                selectedBtn &&
                <ButtonSetModal selectedBtn={selectedBtn} closeModal={() => setSelectedBtn(null)}>
                    {buttonComponents[selectedBtn]}
                </ButtonSetModal>
            }
        </ButtonBoxStyle>
    );
}

const ButtonBoxStyle = styled.article`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    row-gap: 1rem;
`

const Title = styled.h2`
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
`

// SimpleBtn
const SimpleBtn = styled.a<SimpleBtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: ${({$borderRadius}) => $borderRadius}px;
    background-color: ${({$backgroundColor}) => $backgroundColor};
    color: ${({$textColor}) => $textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

// GradationBtn
const GradationBtn = styled.a<GrationBtnProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: ${({$borderRadius}) => $borderRadius}px;
    background: ${({$gradationColor1, $gradationColor2, $gradationColor3, $gradationColor4}) =>
            `linear-gradient(90deg, ${$gradationColor1}, ${$gradationColor2}, ${$gradationColor3}, ${$gradationColor4})`};
    background-size: 400%;
    color: ${({$textColor}) => $textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        animation-name: gradient;
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    /* gradient animation */
    @keyframes gradient {
        0% {
            background-position: 0%;
        }
        100% {
            background-position: 400%;
        }
    }
`

export default ButtonBox;
