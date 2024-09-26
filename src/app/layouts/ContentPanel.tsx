import styled from "styled-components";

import UploadArea from '../../features/uploadImage/components/UploadArea'

function ContentPanel() {
    return(
        <ContentPanelStyle>
            <UploadArea />
        </ContentPanelStyle>
    )
}

const ContentPanelStyle = styled.aside`
    display: none;
    width: 25%;
    max-width: 280px;
    padding: 2rem 1rem;
    background-color: var(--c-background-tertiary);

    @media (min-width: 800px) {
        display: block;
    }
`;


export default ContentPanel;