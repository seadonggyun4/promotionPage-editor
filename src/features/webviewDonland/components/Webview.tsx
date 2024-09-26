import styled from "styled-components";
import backgroundImage from "../../../asset/img/promotionPage.jpeg";
import React, { useState } from "react";
import { useElementsContext } from "../../../app/provider/ElementsProvider";

// ElementData 타입 정의: 각 요소는 고유 id, element, 위치 정보(x, y)를 포함합니다.
interface ElementData {
    id: string; // 각 요소를 식별할 고유 id
    element: React.ReactNode;
    x: number;
    y: number;
}

interface WebviewProps {
    elementsData: ElementData[]; // ElementData 타입 배열
    uploadedImage: string | ArrayBuffer | null; // 적절한 타입 지정
}

function Webview({ elementsData, uploadedImage }: WebviewProps) {
    const { updateElementPosition } = useElementsContext(); // 위치 업데이트를 위한 컨텍스트
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // 드래그 오프셋 저장

    // 드래그 시작 시 오프셋을 계산하여 저장
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string, elementX: number, elementY: number) => {
        const elementsBox = (e.target as HTMLElement).closest('#elementsBox'); // ElementsBox 요소
        const boundingRect = elementsBox?.getBoundingClientRect(); // ElementsBox의 좌표 가져오기

        if (boundingRect) {
            const offsetX = e.clientX - boundingRect.left - elementX; // 마우스와 요소의 X 오프셋 (ElementsBox 기준)
            const offsetY = e.clientY - boundingRect.top - elementY; // 마우스와 요소의 Y 오프셋 (ElementsBox 기준)
            setDragOffset({ x: offsetX, y: offsetY }); // 오프셋 저장
            e.dataTransfer.setData("id", id); // 드래그한 요소의 id 저장
        }
    };

    // 드롭 시 요소의 위치를 업데이트
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // 기본 동작 방지
        const id = e.dataTransfer.getData("id"); // 드래그한 요소의 id 가져오기

        const boundingRect = e.currentTarget.getBoundingClientRect(); // ElementsBox의 위치 및 크기를 가져옴
        const parentWidth = boundingRect.width; // 부모 컨테이너의 너비
        const parentHeight = boundingRect.height; // 부모 컨테이너의 높이

        // 드롭된 좌표에서 ElementsBox의 좌표를 뺀 상대적 좌표 계산 (px 단위)
        const xPx = e.clientX - boundingRect.left - dragOffset.x;
        const yPx = e.clientY - boundingRect.top - dragOffset.y;

        // 상대적인 % 좌표로 변환
        const xPercent = (xPx / parentWidth) * 100;
        const yPercent = (yPx / parentHeight) * 100;

        updateElementPosition(id, xPercent, yPercent); // 요소의 새로운 위치를 %로 업데이트
    };

    // 드래그 중에는 기본 동작 방지를 해줍니다.
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // 드롭이 가능하도록 기본 동작 방지
    };

    return (
        <WebViewStyle id="rendingPage">
            <WebViewImage
                id="rending"
                src={uploadedImage ? uploadedImage.toString() : backgroundImage} // 이미지가 없다면 기본 배경 이미지 사용
                alt="프로모션 페이지 이미지"
            />
            <ElementsBox id="elementsBox" onDragOver={handleDragOver} onDrop={handleDrop}>
                {elementsData.map((data, index) => (
                    <ElementWrap
                        draggable
                        key={index}
                        style={{ top: `${data.y}%`, left: `${data.x}%` }} // 요소의 위치를 %로 설정
                        onDragStart={(e) => handleDragStart(e, data.id, data.x, data.y)} // 드래그 시작 시 오프셋 계산
                    >
                        {data.element} {/* 요소 렌더링 */}
                    </ElementWrap>
                ))}
            </ElementsBox>
        </WebViewStyle>
    );
}


// 스타일 컴포넌트 정의
const WebViewStyle = styled.section`
    position: relative;
    padding-bottom: 6rem;
    width: 100%;
    height: 100%;
    background: #ffff;
`;

const WebViewImage = styled.img`
    width: 100%;
    height: auto;
`;

const ElementsBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ElementWrap = styled.div`
    position: absolute;
`;

export default Webview;
