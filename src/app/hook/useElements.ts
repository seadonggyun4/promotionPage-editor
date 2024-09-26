// useElements.ts
import { useState } from "react";

export const useElements = () => {
    const [elements, setElements] = useState<React.ReactNode[]>([]); // ReactNode 배열로 상태 정의

    const addElement = (el: React.ReactNode) => {
        setElements(prevElements => [...prevElements, el]); // ReactNode 추가
    };

    const createSampleButton = (ButtonComponent: React.ReactNode) => {
        addElement(ButtonComponent); // 버튼을 추가
    };

    return { elements, createSampleButton };
};
