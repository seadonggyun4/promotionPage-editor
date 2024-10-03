import React from "react";
import styled from "styled-components";
import ButtonSetModal from "./ButtonSetModal";
import { BTN_STYLE } from "../../../constant/button";
import { useElementsContext } from "../../../app/provider/ElementsProvider";

type ButtonStyle = 'SimpleBtn' | 'GradationBtn';

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
    const { selected, setSelected } = useElementsContext()
    const buttonComponents: { [key in ButtonStyle]: React.ReactElement } = {
        SimpleBtn:
            <SimpleBtn
                $backgroundColor={BTN_STYLE['SimpleBtn']['backgroundColor']}
                $textColor={BTN_STYLE['SimpleBtn']['textColor']}
                $borderRadius={BTN_STYLE['SimpleBtn']['borderRadius']}
                target="_blank"
                onClick={(e) => {e.preventDefault()}}
            >
                {BTN_STYLE['SimpleBtn']['buttonText']}
            </SimpleBtn>,
        GradationBtn:
            <GradationBtn
                $textColor={BTN_STYLE['GradationBtn']['textColor']}
                $gradationColor1={BTN_STYLE['GradationBtn']['gradationColor1']}
                $gradationColor2={BTN_STYLE['GradationBtn']['gradationColor2']}
                $gradationColor3={BTN_STYLE['GradationBtn']['gradationColor3']}
                $gradationColor4={BTN_STYLE['GradationBtn']['gradationColor4']}
                $borderRadius={BTN_STYLE['GradationBtn']['borderRadius']}
                target="_blank"
                onClick={(e) => {e.preventDefault()}}
            >
                {BTN_STYLE['GradationBtn']['buttonText']}
            </GradationBtn>,
    };


    const setSelectedBtn = (style: ButtonStyle) => {
        setSelected({
            id: '',
            type: 'button',
            style,
            styleData: BTN_STYLE[style],
            element: buttonComponents[style],
            x: 0,
            y: 0
        })
    }

    return (
        <ButtonBoxStyle>
            <Title>버튼 카테고리</Title>
            <div style={{height: '50px', width: '100%'}}>
                <SimpleBtn
                    $backgroundColor={BTN_STYLE['SimpleBtn']['backgroundColor']}
                    $textColor={BTN_STYLE['SimpleBtn']['textColor']}
                    $borderRadius={BTN_STYLE['SimpleBtn']['borderRadius']}
                    onClick={() => setSelectedBtn('SimpleBtn')}>
                    {BTN_STYLE['SimpleBtn']['buttonText']}
                </SimpleBtn>
            </div>
            <div style={{height: '50px', width: '100%'}}>
                <GradationBtn
                    $textColor={BTN_STYLE['GradationBtn']['textColor']}
                    $gradationColor1={BTN_STYLE['GradationBtn']['gradationColor1']}
                    $gradationColor2={BTN_STYLE['GradationBtn']['gradationColor2']}
                    $gradationColor3={BTN_STYLE['GradationBtn']['gradationColor3']}
                    $gradationColor4={BTN_STYLE['GradationBtn']['gradationColor4']}
                    $borderRadius={BTN_STYLE['GradationBtn']['borderRadius']}
                    onClick={() => setSelectedBtn('GradationBtn')}>
                    {BTN_STYLE['GradationBtn']['buttonText']}
                </GradationBtn>
            </div>
            {
                selected?.type === 'button' &&
                <ButtonSetModal selectedBtn={selected?.style} closeModal={() => setSelected(null)}>
                    {buttonComponents[selected.style as ButtonStyle]}
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
