// ButtonBox.tsx
import React from "react";
import styled from "styled-components";
import { useElementsContext } from "../../..//app/provider/ElementsProvider";

function ButtonBox() {
    const { createSampleButton } = useElementsContext()

    const selectBtn = () => {
        createSampleButton(<SampleBtn>샘플 버튼</SampleBtn>); // SampleBtn을 매개변수로 전달
    };

    return (
        <ButtonBoxStyle>
            <Title>버튼 카테고리</Title>
            <SampleBtn onClick={selectBtn}>샘플 버튼</SampleBtn>
            <GradationBtn onClick={selectBtn}>샘플 버튼</GradationBtn>
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
    width: 200px;
    height: 20px;
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
    width: 200px;
    height: 20px;
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
