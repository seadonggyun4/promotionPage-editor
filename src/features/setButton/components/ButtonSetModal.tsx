import React, { useState } from 'react';
import styled from 'styled-components';

interface ButtonSetModalProps {
    children: React.ReactElement;
}

function ButtonSetModal ({children}: ButtonSetModalProps) {
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setButtonText(event.target.value);
    }

    const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setButtonLink(event.target.value)
    }

    return (
        <ModalWrapper>
            <ModalInner>
                <ElementWrapper>
                    <div style={{ width:'200px' }}>
                        {React.cloneElement(children, { children: buttonText || children.props.children, href: buttonLink })}
                    </div>
                </ElementWrapper>
                <ElementSettingBox>
                    <TextSettingForm>
                        <StyledLabel>버튼 텍스트</StyledLabel>
                        <StyledInput type="text" placeholder="텍스트를 입력해 주세요." onChange={handleTextChange}/>
                        <StyledLabel>버튼 링크</StyledLabel>
                        <StyledInput type="url" placeholder="링크를 입력해 주세요." onChange={handleLinkChange}/>
                    </TextSettingForm>
                </ElementSettingBox>
            </ModalInner>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalInner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    width: 1000px;
    height: 500px;
    background-color: var(--c-background-secondary);
    border-radius: 15px;
    padding: 20px;
`;
const ElementWrapper = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-background-tertiary);
`
const ElementSettingBox = styled.article`
    width: 400px;
    height: 100%;
    border-radius: 15px;
    background-color: #ffffff;
`

const TextSettingForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.5rem;
    padding: 0 1rem;
    height: 100%;
`;
const StyledLabel = styled.label`
    color: #434ce8;
    text-transform: uppercase;
    font-size: 1rem;
`;
const StyledInput = styled.input`
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    border: 2px solid var(--c-border-primary);
    border-radius: 5px;
    outline: none;
    transition: 0.3s ease-in-out;

    &:focus {
        border: 2px solid var(--c-accent-primary);
    }
`;

export default ButtonSetModal;