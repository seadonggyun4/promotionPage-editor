import React, { useState } from 'react';
import {GRADATION_BTN} from "../../../constant/button";

const menu = [
    '텍스트 & 링크',
    '색상',
    '테두리',
    '그림자'
]

export function useGradtionBtn() {
    const [menuActive, setMenuActive] = useState(menu[0]);

    const [buttonText, setButtonText] = useState(GRADATION_BTN['text']);
    const [buttonLink, setButtonLink] = useState(GRADATION_BTN['link']);
    const [textColor, setTextColor] = useState(GRADATION_BTN['textColor']);
    const [gradationColor1, setGradationColor1] = useState(GRADATION_BTN['gradationColor1']);
    const [gradationColor2, setGradationColor2] = useState(GRADATION_BTN['gradationColor2']);
    const [gradationColor3, setGradationColor3] = useState(GRADATION_BTN['gradationColor3']);
    const [gradationColor4, setGradationColor4] = useState(GRADATION_BTN['gradationColor4']);
    const [borderRadius, setBorderRadius] = useState(GRADATION_BTN['borderRadius']);
    const [borderWidth, setBorderWidth] = useState(GRADATION_BTN['borderWidth']);
    const [borderColor, setBorderColor] = useState(GRADATION_BTN['borderColor']);
    const [shadowOffsetX, setShadowOffsetX] = useState(GRADATION_BTN['shadowOffsetX']);
    const [shadowOffsetY, setShadowOffsetY] = useState(GRADATION_BTN['shadowOffsetY']);
    const [shadowBlurRadius, setShadowBlurRadius] = useState(GRADATION_BTN['shadowBlurRadius']);
    const [shadowColor, setShadowColor] = useState(GRADATION_BTN['shadowColor']);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    const handleTextChange = handleInputChange(setButtonText);
    const handleLinkChange = handleInputChange(setButtonLink);
    const handleTextColorChange = handleInputChange(setTextColor);
    const handleGradationColor1Change = handleInputChange(setGradationColor1);
    const handleGradationColor2Change = handleInputChange(setGradationColor2);
    const handleGradationColor3Change = handleInputChange(setGradationColor3);
    const handleGradationColor4Change = handleInputChange(setGradationColor4);
    const handleBorderRadiusChange = handleInputChange(setBorderRadius);
    const handleBorderWidthChange = handleInputChange(setBorderWidth);
    const handleBorderColorChange = handleInputChange(setBorderColor);
    const handleShadowOffsetXChange = handleInputChange(setShadowOffsetX);
    const handleShadowOffsetYChange = handleInputChange(setShadowOffsetY);
    const handleShadowBlurRadiusChange = handleInputChange(setShadowBlurRadius);
    const handleShadowColorChange = handleInputChange(setShadowColor);

    const customButton = (children: React.ReactElement) => {
        return {
            children: buttonText || children.props.children,
            href: buttonLink,
            style: {
                color: textColor,
                borderRadius: `${borderRadius}px`,
                border: `${borderWidth}px solid ${borderColor}`,
                background: `linear-gradient(90deg, ${gradationColor1}, ${gradationColor2}, ${gradationColor3}, ${gradationColor4})`,
                backgroundSize: "400%",
                boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlurRadius}px ${shadowColor}`,
            },
        }
    }

    return {
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
        customButton,
    };
}