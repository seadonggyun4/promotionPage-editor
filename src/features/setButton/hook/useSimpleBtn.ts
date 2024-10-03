import React, { useState } from 'react';
import {SIMPLE_BTN} from '../../../constant/button'

const menu = [
    '텍스트 & 링크',
    '색상',
    '테두리',
    '그림자'
]

export function useSimpleBtn() {
    const [menuActive, setMenuActive] = useState(menu[0]);

    const [buttonText, setButtonText] = useState(SIMPLE_BTN['buttonText']);
    const [buttonLink, setButtonLink] = useState(SIMPLE_BTN['buttonLink']);
    const [textColor, setTextColor] = useState(SIMPLE_BTN['textColor']);
    const [backgroundColor, setBackgroundColor] = useState(SIMPLE_BTN['backgroundColor']);
    const [borderRadius, setBorderRadius] = useState(SIMPLE_BTN['borderRadius']);
    const [borderWidth, setBorderWidth] = useState(SIMPLE_BTN['borderWidth']);
    const [borderColor, setBorderColor] = useState(SIMPLE_BTN['borderColor']);
    const [shadowOffsetX, setShadowOffsetX] = useState(SIMPLE_BTN['shadowOffsetX']);
    const [shadowOffsetY, setShadowOffsetY] = useState(SIMPLE_BTN['shadowOffsetY']);
    const [shadowBlurRadius, setShadowBlurRadius] = useState(SIMPLE_BTN['shadowBlurRadius']);
    const [shadowColor, setShadowColor] = useState(SIMPLE_BTN['shadowColor']);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };

    const handleTextChange = handleInputChange(setButtonText);
    const handleLinkChange = handleInputChange(setButtonLink);
    const handleTextColorChange = handleInputChange(setTextColor);
    const handleBackgroundColorChange = handleInputChange(setBackgroundColor);
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
                backgroundColor: backgroundColor,
                borderRadius: `${borderRadius}px`,
                border: `${borderWidth}px solid ${borderColor}`,
                boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlurRadius}px ${shadowColor}`,
            },
        }
    }

    const buttonStyle = {
        buttonText,
        buttonLink,
        textColor,
        backgroundColor,
        borderRadius,
        borderWidth,
        borderColor,
        shadowOffsetX,
        shadowOffsetY,
        shadowBlurRadius,
        shadowColor
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
        customButton,
        buttonStyle,
    };
}