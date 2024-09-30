import { useState } from 'react';
import { MENU } from "../../constant/global";

export const useMenu = () => {
    const [isActive, setIsActive] = useState(MENU[0]);

    const activeMenu = (data: string): void => {
        setIsActive(data);
    };

    return { isActive, activeMenu }
}