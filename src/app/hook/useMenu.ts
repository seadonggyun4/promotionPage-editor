import { useState } from 'react';
import { menu } from "../../contents/contents";

export const useMenu = () => {
    const [isActive, setIsActive] = useState(menu[0]);

    const activeMenu = (data: string): void => {
        setIsActive(data);
    };

    return { isActive, activeMenu }
}