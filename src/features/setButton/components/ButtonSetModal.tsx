import React, { useState } from 'react';
import styled from 'styled-components';
import { useElementsContext } from "../../..//app/provider/ElementsProvider";

interface ButtonSetModalProps {
    closeModal: () => void;
    children: React.ReactElement;
}

const menu = [
    '텍스트 & 링크',
    '색상',
    '모양'
]

function ButtonSetModal ({closeModal, children}: ButtonSetModalProps) {
    const { createSampleButton } = useElementsContext()
    const [menuActive, setMenuActive] = useState(menu[0]);
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const customButton = React.cloneElement(children, {
        children: buttonText || children.props.children,
        href: buttonLink,
        style: {
            color: textColor,
            backgroundColor,
        },
    });

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };
    const handleTextChange = handleInputChange(setButtonText);
    const handleLinkChange = handleInputChange(setButtonLink);
    const handleTextColorChange = handleInputChange(setTextColor);
    const handleBackgroundColorChange = handleInputChange(setBackgroundColor);

    const menuClick = (item: string) => setMenuActive(item)

    const addButton = () => {
        createSampleButton(customButton)
        closeModal()
    }

    return (
        <ModalWrapper>
            <ModalInner>
                <ElementWrapper>
                    <div style={{width: '200px'}}>
                        {customButton}
                    </div>
                </ElementWrapper>
                <ElementSettingBox>
                    <ModalMenu>
                        {menu && menu.map((item, index) => (
                            <li key={index} className={item === menuActive ? "active" : ""} onClick={() => {
                                menuClick(item)
                            }}>
                                {item}
                            </li>
                        ))}
                    </ModalMenu>
                    {
                        menuActive === menu[0] &&
                        <SettingForm>
                            <StyledLabel>버튼 텍스트</StyledLabel>
                            <StyledInput type="text" placeholder="텍스트를 입력해 주세요." onChange={handleTextChange}/>
                            <StyledLabel>버튼 링크</StyledLabel>
                            <StyledInput type="url" placeholder="링크를 입력해 주세요." onChange={handleLinkChange}/>
                        </SettingForm>
                    }
                    {
                        menuActive === menu[1] &&
                        <SettingForm>
                            <StyledLabel>텍스트 색상</StyledLabel>
                            <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                                <StyledColorLabel htmlFor="textColorInput" style={{backgroundColor: textColor}}/>
                                <input
                                    id="textColorInput"
                                    type="color"
                                    style={{visibility: 'hidden'}}
                                    onChange={handleTextColorChange}
                                />
                            </div>
                            <StyledLabel>버튼 색상</StyledLabel>
                            <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                                <StyledColorLabel htmlFor="backgroundColorInput" style={{backgroundColor}}/>
                                <input
                                    id="backgroundColorInput"
                                    type="color"
                                    style={{visibility: 'hidden'}}
                                    onChange={handleBackgroundColorChange}
                                />
                            </div>
                        </SettingForm>
                    }
                    <div>
                        <button onClick={addButton}>등록</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </ElementSettingBox>
            </ModalInner>
        </ModalWrapper>
    )
}

// modal
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
`
const ModalMenu = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 2rem;
    
    & li {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        height: 30px;
        font-weight: 500;
        color: inherit;
        border-bottom: 3px solid transparent;
        text-decoration: none;
        cursor: pointer;
        transition: 0.15s ease;
    }

    & li:hover,
    & li.active {
        color: var(--c-accent-primary);
        border-bottom-color: var(--c-accent-primary);
    }
`
const StyledLabel = styled.label`
    color: var(--c-text-action);
    text-transform: uppercase;
    font-size: 1rem;
`;
const SettingForm = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    row-gap: 0.5rem;
    height: 100%;
    max-height: 300px;
`;
// testSetting
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
// colorSetting
const StyledColorLabel = styled.label`
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 2em;
    border: 2px solid var(--c-border-primary);
    border-radius: 5px; 
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover {
        border: 2px solid var(--c-accent-primary);
    }
`;

export default ButtonSetModal;