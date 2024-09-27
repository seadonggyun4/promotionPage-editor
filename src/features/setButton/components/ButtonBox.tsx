// ButtonBox.tsx
import React from "react";
import styled from "styled-components";
import { useElementsContext } from "../../..//app/provider/ElementsProvider";

function ButtonBox() {
    const { createSampleButton } = useElementsContext()

    const selectBtn = (buttonType : 'SampleBtn' | 'GradationBtn') => {
        const buttonComponents = {
            SampleBtn: <SampleBtn>샘플 버튼</SampleBtn>,
            GradationBtn: <GradationBtn>그라데이션 버튼</GradationBtn>,
        };

        createSampleButton(buttonComponents[buttonType])
    };

    return (
        <ButtonBoxStyle>
            <Title>버튼 카테고리</Title>
            <SampleBtn onClick={() => selectBtn('SampleBtn')}>샘플 버튼</SampleBtn>
            <GradationBtn onClick={() => selectBtn('GradationBtn')}>그라데이션 버튼</GradationBtn>
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

const SampleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--c-accent-primary);
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

const GradationBtn = styled.button`
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
