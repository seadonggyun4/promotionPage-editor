import styled from "styled-components";
import backgroundImage from "../../../asset/img/rendingPage.png";
import React from "react";

interface WebviewProps {
    elements: React.ReactNode[]; // ReactNode로 변경
    uploadedImage: string | ArrayBuffer | null; // 적절한 타입 지정
}

function Webview ({elements, uploadedImage}: WebviewProps) {
    return (
        <WebViewStyle className="webview">
            <img
                id="rending"
                src={uploadedImage ? uploadedImage.toString() : backgroundImage}
                alt="프로모션 페이지 이미지"
                style={{width: '100%', height: '100%'}}
            />
            {elements.map((element, index) => (
                <div key={index}>{element}</div> // elements에서 가져온 버튼을 렌더링
            ))}
        </WebViewStyle>
    )
}

const WebViewStyle = styled.section`
    padding-bottom: 6rem;
    width: 100%;
    height: 100%;
    background: #ffff;
`;


export default Webview