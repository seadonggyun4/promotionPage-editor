// useElements.ts
import { useState } from "react";

// 요소 데이터 타입 정의
interface ElementData {
    id: string;
    type: string;
    style: string;
    styleData: { [key: string]: any };
    element: React.ReactNode;
    x: number;
    y: number;
}

export const useElements = () => {
    const [elementsData, setElementsData] = useState<ElementData[]>([]); // elementsData로 상태 관리
    const [selected, setSelected] = useState<ElementData | null>(null);


    // 요소 추가 함수 (새로운 객체 형태로 추가)
    const addElement = (el: React.ReactNode, type: string, style: string, styleData: {[key: string]: string}, elKey: string) => {
        const newElementData: ElementData = {
            id: elKey,
            type,
            style,
            element: el,
            x: 0, // 초기 위치 (x)
            y: 0, // 초기 위치 (y)
            styleData,
        };
        setElementsData((prevElements) => [...prevElements, newElementData]);
    };

    // 요소 업데이트 함수
    const updateElement = (el: React.ReactNode, id: string, style: string, styleData: { [key: string]: any }) => {
        setElementsData((prevElements) =>
            prevElements.map((elem) =>
                elem.id === id ? { ...elem, element: el, style, styleData } : elem
            )
        );
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
    const createSampleButton = (ButtonComponent: React.ReactNode, style:string, styleData: {[key: string]: any}, elKey: string) => {
        addElement(ButtonComponent, 'button', style, styleData, elKey);
    };

    // 샘플 버튼 업데이트 함수
    const updateSampleButton = (ButtonComponent: React.ReactNode, id: string, style:string, styleData: {[key: string]: any}) => {
        updateElement(ButtonComponent, id, style, styleData);
    };



    return { elementsData, createSampleButton, updateElementPosition, selected, setSelected, updateElement, updateSampleButton };};

export type UseElementsReturnType = ReturnType<typeof useElements>;
