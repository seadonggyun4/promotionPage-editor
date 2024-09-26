import styled from "styled-components";
import backgroundImage from "../../../asset/img/rendingPage.png";
import React from "react";

interface DonloadBtnProps {
    uploadedImage: string | ArrayBuffer | null; // 적절한 타입 지정
}

function Webview ({uploadedImage}: DonloadBtnProps) {
    return (
        <WebViewStyle className="webview">
            <section>
                <img
                    id="rending"
                    src={uploadedImage ? uploadedImage.toString() : backgroundImage}
                    alt="프로모션 페이지 이미지"
                    style={{width: '100%', height: '100%'}}
                />
            </section>
        </WebViewStyle>
    )
}

const WebViewStyle = styled.div`
    padding-bottom: 6rem;
    width: 100%;
    height: 100%;
    background: #ffff;
`;


export default Webview