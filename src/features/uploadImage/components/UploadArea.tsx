import styled from "styled-components";
import React from "react";
import {useUploadImageContext} from "../provider/UploadImageContext";

function UploadArea(){
    const { handleDrop, handleDragOver } = useUploadImageContext();

    return (
        <UploadAreaStyle
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <strong>
                이미지 파일을 드래그 해주세요.
            </strong>
        </UploadAreaStyle>
    )
}

const UploadAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 3rem;
    width: 200px;
    height: 150px;
    border: none;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23ccc' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    background-color: transparent;
    cursor: pointer;

    &:hover, &:focus{
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%232e44ff' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }

    & strong {
        font-weight: 700;
        color: var(--c-accent-primary);
    }
`;


export default UploadArea;