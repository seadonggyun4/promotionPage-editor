import React, {useState} from "react";
import styled from "styled-components";
import ButtonSetModal from "./ButtonSetModal";
import { SIMPLE_BTN } from "../../../constant/button";

type SimpleBtnProps = {
    backgroundColor: string;
    textColor: string;
    borderRadius: string;
}

function ButtonBox() {
    const [selectedBtn, setSelectedBtn] = useState<'SampleBtn' | 'GradationBtn' | null>(null);

    const buttonComponents = {
        SampleBtn:
            <SimpleBtn
                backgroundColor={SIMPLE_BTN['backgroundColor']}
                textColor={SIMPLE_BTN['textColor']}
                borderRadius={SIMPLE_BTN['borderRadius']}
                target="_blank">
                {SIMPLE_BTN['text']}
            </SimpleBtn>,
        GradationBtn: <GradationBtn target="_blank">그라데이션 버튼</GradationBtn>,
    };

    return (
        <ButtonBoxStyle>
            <Title>버튼 카테고리</Title>
            <div style={{height: '50px', width: '100%'}}>
                <SimpleBtn
                    backgroundColor={SIMPLE_BTN['backgroundColor']}
                    textColor={SIMPLE_BTN['textColor']}
                    borderRadius={SIMPLE_BTN['borderRadius']}
                    onClick={() => setSelectedBtn('SampleBtn')}>
                    {SIMPLE_BTN['text']}
                </SimpleBtn>
            </div>
            <div style={{height: '50px', width: '100%'}}>
                <GradationBtn onClick={() => setSelectedBtn('GradationBtn')}>그라데이션 버튼</GradationBtn>
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
    border-radius: ${({borderRadius}) => borderRadius}px;
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({textColor}) => textColor};
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

// GradationBtn
const GradationBtn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(64,64,137,1) 35%, rgba(67,76,232,1) 100%);
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`

export default ButtonBox;
