import React from "react";
import styled from "styled-components";

function Header (){
    return (
        <HeaderStyle>
            <h1>Rending Page Editor</h1>
        </HeaderStyle>
    )
}


const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;

    & h1 {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1.25;
    }
`;

export default Header