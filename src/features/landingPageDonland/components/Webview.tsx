import styled from "styled-components";
import backgroundImage from "../../../asset/img/rendingPage.png";
import React from "react";

interface WebviewProps {
    elements: React.ReactNode[]; // ReactNode로 변경
    uploadedImage: string | ArrayBuffer | null; // 적절한 타입 지정
}

function Webview ({elements, uploadedImage}: WebviewProps) {
    return (
        <WebViewStyle id="rendingPage">
            <WebViewImage
                id="rending"
                src={uploadedImage ? uploadedImage.toString() : backgroundImage}
                alt="프로모션 페이지 이미지"
            />
            <ElementsBox>
                {elements.map((element, index) => (
                    <div key={index}>{element}</div> // elements에서 가져온 버튼을 렌더링
                ))}
            </ElementsBox>
        </WebViewStyle>
    )
}

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
`

const ElementsBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`


export default Webview