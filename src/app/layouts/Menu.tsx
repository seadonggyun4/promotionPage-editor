import React, { ReactNode } from "react";
import styled from "styled-components";

interface MenuProps {
    children?: ReactNode; // children을 선택적으로 설정
}

function Menu({ children = null }: MenuProps) {
    return (
        <MenuStyle>
            <ul>
                <li className="active">페이지 이미지 업로드</li>
                <li>버튼</li>
            </ul>
            <div>
                {children}
            </div>
        </MenuStyle>
    );
}

const MenuStyle = styled.menu`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & ul {
        display: flex;
        align-items: center;
        column-gap: 1rem;

        & li {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            height: 48px;
            padding: 0 0.25rem;
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
    }
`;

export default Menu;
