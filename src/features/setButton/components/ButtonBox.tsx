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
        <div>
            <SampleBtn onClick={selectBtn}>샘플 버튼</SampleBtn>
        </div>
    );
}

const SampleBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 200px;
    height: 20px;
    border-radius: 5px;
    background-color: #404089;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

export default ButtonBox;
