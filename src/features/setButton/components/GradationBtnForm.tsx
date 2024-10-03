import React, {ChangeEvent, Dispatch, SetStateAction, useEffect} from "react";
import styled from "styled-components";
import { useElementsContext } from "../../../app/provider/ElementsProvider";

interface gradationBtnHook {
    menu: string[],
    menuActive: string,
    setMenuActive: Dispatch<SetStateAction<string>>,
    buttonText: string,
    handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void,
    buttonLink: string,
    handleLinkChange: (event: ChangeEvent<HTMLInputElement>) => void,
    textColor: string,
    handleTextColorChange: (event: ChangeEvent<HTMLInputElement>) => void,
    gradationColor1: string,
    handleGradationColor1Change: (event: ChangeEvent<HTMLInputElement>) => void,
    gradationColor2: string,
    handleGradationColor2Change: (event: ChangeEvent<HTMLInputElement>) => void,
    gradationColor3: string,
    handleGradationColor3Change: (event: ChangeEvent<HTMLInputElement>) => void,
    gradationColor4: string,
    handleGradationColor4Change: (event: ChangeEvent<HTMLInputElement>) => void,
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

function GradationBtnForm({gradationBtnHook}: { gradationBtnHook: gradationBtnHook }) {
    const { selected } = useElementsContext()
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
        gradationColor1,
        handleGradationColor1Change,
        gradationColor2,
        handleGradationColor2Change,
        gradationColor3,
        handleGradationColor3Change,
        gradationColor4,
        handleGradationColor4Change,
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
    } = gradationBtnHook;

    useEffect(() => {
        if(selected?.id === '') return
        handleTextChange({ target: { value: selected?.styleData.buttonText } } as ChangeEvent<HTMLInputElement>)
        handleLinkChange({ target: { value: selected?.styleData.buttonLink } } as ChangeEvent<HTMLInputElement>)
        handleTextColorChange({ target: { value: selected?.styleData.textColor } } as ChangeEvent<HTMLInputElement>)
        handleGradationColor1Change({ target: { value: selected?.styleData.gradationColor1 } } as ChangeEvent<HTMLInputElement>)
        handleGradationColor2Change({ target: { value: selected?.styleData.gradationColor2 } } as ChangeEvent<HTMLInputElement>)
        handleGradationColor3Change({ target: { value: selected?.styleData.gradationColor3 } } as ChangeEvent<HTMLInputElement>)
        handleGradationColor4Change({ target: { value: selected?.styleData.gradationColor4 } } as ChangeEvent<HTMLInputElement>)
        handleBorderRadiusChange({ target: { value: selected?.styleData.borderRadius } } as ChangeEvent<HTMLInputElement>)
        handleBorderWidthChange({ target: { value: selected?.styleData.borderWidth } } as ChangeEvent<HTMLInputElement>)
        handleBorderColorChange({ target: { value: selected?.styleData.borderColor } } as ChangeEvent<HTMLInputElement>)
        handleShadowOffsetXChange({ target: { value: selected?.styleData.shadowOffsetX } } as ChangeEvent<HTMLInputElement>)
        handleShadowOffsetYChange({ target: { value: selected?.styleData.shadowOffsetY } } as ChangeEvent<HTMLInputElement>)
        handleShadowBlurRadiusChange({ target: { value: selected?.styleData.shadowBlurRadius } } as ChangeEvent<HTMLInputElement>)
        handleShadowColorChange({ target: { value: selected?.styleData.shadowColor } } as ChangeEvent<HTMLInputElement>)
    },[])

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
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="textColorInput" style={{backgroundColor: textColor}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="textColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={textColor}
                            onChange={handleTextColorChange}
                        />
                    </div>
                    <StyledLabel>첫번째 그라데이션 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="gradation1ColorInput" style={{backgroundColor: gradationColor1}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="gradation1ColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={gradationColor1}
                            onChange={handleGradationColor1Change}
                        />
                    </div>
                    <StyledLabel>두번째 그라데이션 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="gradation2ColorInput" style={{backgroundColor: gradationColor2}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="gradation2ColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={gradationColor2}
                            onChange={handleGradationColor2Change}
                        />
                    </div>
                    <StyledLabel>세번째 그라데이션 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="gradation3ColorInput" style={{backgroundColor: gradationColor3}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="gradation3ColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={gradationColor3}
                            onChange={handleGradationColor3Change}
                        />
                    </div>
                    <StyledLabel>네번째 그라데이션 색상</StyledLabel>
                    <div style={{position: 'relative'}}>
                        <StyledColorLabel htmlFor="gradation4ColorInput" style={{backgroundColor: gradationColor4}}>클릭후 색상을 선택해주세요.</StyledColorLabel>
                        <input
                            id="gradation4ColorInput"
                            type="color"
                            style={{visibility: 'hidden'}}
                            value={gradationColor4}
                            onChange={handleGradationColor4Change}
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

export default GradationBtnForm