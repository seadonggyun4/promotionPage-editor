import React, { useState } from 'react';

const menu = [
    '텍스트 & 링크',
    '색상',
    '테두리',
    '그림자'
]

export function useSimpleBtn() {
    const [menuActive, setMenuActive] = useState(menu[0]);
    const [buttonText, setButtonText] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [textColor, setTextColor] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [borderRadius, setBorderRadius] = useState('0');
    const [borderWidth, setBorderWidth] = useState('0');
    const [borderColor, setBorderColor] = useState('');
    const [shadowOffsetX, setShadowOffsetX] = useState('0');
    const [shadowOffsetY, setShadowOffsetY] = useState('0');
    const [shadowBlurRadius, setShadowBlurRadius] = useState('0');
    const [shadowColor, setShadowColor] = useState('#000');

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
    };
}