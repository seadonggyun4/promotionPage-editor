import React from "react";
import styled from "styled-components";
import { useWebViewDownload } from "../hook/useWebViewDownload";

interface DonloadBtnProps {
    uploadedImage: string | ArrayBuffer | null; // 적절한 타입 지정
    backgroundImage: string;
}

function DonloadBtn({uploadedImage, backgroundImage}: DonloadBtnProps) {
    const { webViewDownload } = useWebViewDownload(uploadedImage, backgroundImage);

    return (
        <DownloadBtnStyle onClick={webViewDownload}>페이지 다운로드</DownloadBtnStyle>
    )
}

const DownloadBtnStyle = styled.button`
    padding: 0.3rem;
    width: 150px;
    height: 100%;
    border-radius: 5px;
    background: var(--c-accent-primary);
    color: #ffffff;
    box-shadow: 0 0 10px var(--c-accent-primary);
`;


export default DonloadBtn