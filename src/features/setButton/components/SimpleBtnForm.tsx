import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import styled from "styled-components";

interface SimpleBtnHook {
    menu: string[],
    menuActive: string,
    setMenuActive: Dispatch<SetStateAction<string>>,
    buttonText: string,
    handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void,
    buttonLink: string,
    handleLinkChange: (event: ChangeEvent<HTMLInputElement>) => void,
    textColor: string,
    handleTextColorChange: (event: ChangeEvent<HTMLInputElement>) => void,
    backgroundColor: string,
    handleBackgroundColorChange: (event: ChangeEvent<HTMLInputElement>) => void,
    borderRadius: string,
    handleBorderRadiusChange: (event: ChangeEvent<HTMLInputElement>) => void,
    borderWidth: string,
    handleBorderWidthChange: (event: ChangeEvent<HTMLInputElement>) => void,
    borderColor: string,
    handleBorderColorChange: (event: ChangeEvent<HTMLInputElement>) => void,
    shadowOffsetX: string,
    handleShadowOffsetXChange: (event: ChangeEvent<HTMLInputElement>) => void,
    shadowOffsetY: string,
    handleShadowOffsetYChange: (event: ChangeEvent<HTMLInputElement>) => void,
    shadowBlurRadius: string,
    handleShadowBlurRadiusChange: (event: ChangeEvent<HTMLInputElement>) => void,
    shadowColor: string,
    handleShadowColorChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

function SimpleBtnForm({simpleBtnHook}: { simpleBtnHook: SimpleBtnHook }) {
    const {
        menu,
        menuActive,
        setMenuActive,
        buttonText,
        handleTextChange,
        buttonLink,
        handleLinkChange,
        textColor,
        handleTextColorChange,
        backgroundColor,
        handleBackgroundColorChange,
        borderRadius,
        handleBorderRadiusChange,
        borderWidth,
        handleBorderWidthChange,
        borderColor,
        handleBorderColorChange,
        shadowOffsetX,
        handleShadowOffsetXChange,
        shadowOffsetY,
        handleShadowOffsetYChange,
        shadowBlurRadius,
        handleShadowBlurRadiusChange,
        shadowColor,
        handleShadowColorChange,
    } = simpleBtnHook;

    return (
        <>
            <ModalMenu>
                {menu && menu.map((item, index) => (
                    <li key={index} className={item === menuActive ? "active" : ""} onClick={() => {
                        setMenuActive(item)
                    }}>
                        {item}
                    </li>
                ))}
            </ModalMenu>
            {
                menuActive === menu[0] &&
                <SettingForm>
                    <StyledLabel>버튼 텍스트</StyledLabel>
                    <StyledInput
                        type="text"
                        placeholder="텍스트를 입력해 주세요."
                        value={buttonText}
                        onChange={handleTextChange}/>
                    <StyledLabel>버튼 링크</StyledLabel>
                    <StyledInput
                        type="url"
                        placeholder="링크를 입력해 주세요."
                        value={buttonLink}
                        onChange={handleLinkChange}/>
                </SettingForm>
            }
            {
                menuActive === menu[1] &&
                <SettingForm>
                    <StyledLabel>텍스트 색상</StyledLabel>
                    <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                        <StyledColorLabel htmlFor="textColorInput" style={{backgroundColor: textColor}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="textColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={textColor}
                            onChange={handleTextColorChange}
                        />
                    </div>
                    <StyledLabel>버튼 색상</StyledLabel>
                    <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                        <StyledColorLabel htmlFor="backgroundColorInput" style={{backgroundColor}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="backgroundColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={backgroundColor}
                            onChange={handleBackgroundColorChange}
                        />
                    </div>
                </SettingForm>
            }
            {
                menuActive === menu[2] &&
                <SettingForm>
                    <StyledLabel>테두리 곡선</StyledLabel>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={borderRadius}
                        onChange={handleBorderRadiusChange}
                    />
                    <StyledLabel>테두리 두께</StyledLabel>
                    <input
                        type="range"
                        min="0"
                        max="30"
                        value={borderWidth}
                        onChange={handleBorderWidthChange}
                    />
                    <StyledLabel>테두리 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="borderColorInput" style={{backgroundColor: borderColor}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="borderColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            onChange={handleBorderColorChange}
                        />
                    </div>
                </SettingForm>
            }
            {
                menuActive === menu[3] &&
                <SettingForm>
                    <StyledLabel>그림자 X축</StyledLabel>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={shadowOffsetX}
                        onChange={handleShadowOffsetXChange}/>
                    <StyledLabel>그림자 Y축</StyledLabel>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={shadowOffsetY}
                        onChange={handleShadowOffsetYChange}/>
                    <StyledLabel>그림자 Z축</StyledLabel>
                    <input
                        type="range"
                        min="0"
                        max="20"
                        value={shadowBlurRadius}
                        onChange={handleShadowBlurRadiusChange}/>
                    <StyledLabel>그림자 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="shadowColorInput" style={{backgroundColor: shadowColor}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="shadowColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            onChange={handleShadowColorChange}
                        />
                    </div>
                </SettingForm>
            }
        </>
    )
}

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
// global form style
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
    max-height: 350px;
`;
// textSetting
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2em;
    color: #ffffff;
    background-color: var(--c-border-primary);
    border-radius: 5px; 
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover {
        background-color: var(--c-accent-primary);
    }
`;

export default SimpleBtnForm;