import React, { useState } from "react";
import styled from "styled-components";
import backgroundImage from "../../../asset/img/promotionPage.jpeg";
import { useElementsContext } from "../../../app/provider/ElementsProvider";

interface ElementData {
    id: string;
    element: React.ReactNode;
    x: number;
    y: number;
}

interface WebviewProps {
    elementsData: ElementData[];
    uploadedImage: string | ArrayBuffer | null;
}

function Webview({ elementsData, uploadedImage }: WebviewProps) {
    const { updateElementPosition } = useElementsContext();
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // 드래그 시작 시 오프셋을 계산하여 저장
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string, elementX: number, elementY: number) => {
        const elementsBox = (e.target as HTMLElement).closest('#elementsBox');
        const boundingRect = elementsBox?.getBoundingClientRect();

        if (boundingRect) {
            const offsetX = e.clientX - boundingRect.left - (boundingRect.width * (elementX / 100)); // %로 변환된 값을 기준으로 계산
            const offsetY = e.clientY - boundingRect.top - (boundingRect.height * (elementY / 100));
            setDragOffset({ x: offsetX, y: offsetY });
            e.dataTransfer.setData("id", id);
        }
    };

    // 드롭 시 요소의 위치를 업데이트
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");

        const boundingRect = e.currentTarget.getBoundingClientRect();
        const parentWidth = boundingRect.width;
        const parentHeight = boundingRect.height;

        const xPx = e.clientX - boundingRect.left - dragOffset.x;
        const yPx = e.clientY - boundingRect.top - dragOffset.y;

        const xPercent = (xPx / parentWidth) * 100;
        const yPercent = (yPx / parentHeight) * 100;

        updateElementPosition(id, xPercent, yPercent);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div id="rendingPage">
            <WebViewStyle>
                <WebViewImage
                    id="rending"
                    src={uploadedImage ? uploadedImage.toString() : backgroundImage}
                    alt="프로모션 페이지 이미지"
                />
                <ElementsBox id="elementsBox" onDragOver={handleDragOver} onDrop={handleDrop}>
                    {elementsData.map((data, index) => (
                        <ElementWrap
                            id={`elementWrap`}
                            key={index}
                            style={{ top: `${data.y}%`, left: `${data.x}%`, width: '200px', height:'50px' }}
                            onDragStart={(e) => handleDragStart(e, data.id, data.x, data.y)}
                            draggable
                        >
                            {data.element}
                        </ElementWrap>
                    ))}
                </ElementsBox>
            </WebViewStyle>
        </div>
    );
}

const WebViewStyle = styled.section`
    position: relative;
    width: 100%;
    height: auto;
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
