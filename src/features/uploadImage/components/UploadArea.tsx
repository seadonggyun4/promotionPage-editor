import styled, {css} from "styled-components";
import React, {useState} from "react";
import {useUploadImageContext} from "../provider/UploadImageProvider";

type UploadAreaStyleProps = {
    isDraggedOver: boolean;
};

function UploadArea(){
    const { handleDrop, handleDragOver } = useUploadImageContext();
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDraggedOver(true);
        handleDragOver(event);
    }

    return (
        <UploadAreaStyle
            isDraggedOver={isDraggedOver}
            onDragOver={onDragOver}
            onDrop={handleDrop}
            onDragLeave={() => {setIsDraggedOver(false)}}
        >
            <p>
                이미지 파일을 <br/>
                드래그 해주세요.
            </p>
        </UploadAreaStyle>
    )
}

const UploadAreaStyle = styled.div<UploadAreaStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
    width: 200px;
    height: 150px;
    border: 3px dashed #e5e5e5;
    background-color: transparent;
    cursor: pointer;
    transition: .3s ease-in-out;
    text-align: center;

    ${props => props.isDraggedOver && css`
        border: 3px dashed var(--c-accent-primary);
    `}

    &:hover, &:focus, &:active{
        border: 3px dashed var(--c-accent-primary);
    }

    & p {
        font-weight: 700;
        color: var(--c-accent-primary);
    }
`;


export default UploadArea;