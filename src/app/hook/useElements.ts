// useElements.ts
import { useState } from "react";

// 요소 데이터 타입 정의
interface ElementData {
    id: string;
    type: string;
    element: React.ReactNode;
    x: number;
    y: number;
}

export const useElements = () => {
    const [elementsData, setElementsData] = useState<ElementData[]>([]); // elementsData로 상태 관리

    // 요소 추가 함수 (새로운 객체 형태로 추가)
    const addElement = (el: React.ReactNode, type: string) => {
        const newElementData: ElementData = {
            id: Date.now().toString(), // 고유 ID 부여
            type,
            element: el,
            x: 0, // 초기 위치 (x)
            y: 0, // 초기 위치 (y)
        };
        setElementsData((prevElements) => [...prevElements, newElementData]);
    };

    // 요소의 위치 업데이트 함수
    const updateElementPosition = (id: string, x: number, y: number) => {
        setElementsData((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, x, y } : el
            )
        );
    };

    // 샘플 버튼 생성 함수
    const createSampleButton = (ButtonComponent: React.ReactNode) => {
        addElement(ButtonComponent, 'button');
    };

    return { elementsData, createSampleButton, updateElementPosition };
};

export type UseElementsReturnType = ReturnType<typeof useElements>;
