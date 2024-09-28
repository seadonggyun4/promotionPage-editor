import styled from "styled-components";

import UploadArea from '../../features/uploadImage/components/UploadArea'
import ButtonBox from "../../features/setButton/components/ButtonBox";
import {menu} from "../../contents/contents";

interface ContentPanelProps {
    menuActive : string,
}

function ContentPanel({menuActive} :ContentPanelProps) {
    return(
        <ContentPanelStyle>
            { menu[0] ===  menuActive ? <UploadArea /> : '' }
            { menu[1] ===  menuActive ? <ButtonBox /> : '' }
        </ContentPanelStyle>
    )
}

const ContentPanelStyle = styled.aside`
    display: none;
    width: 25%;
    max-width: 250px;
    padding: 2rem 1rem;
    background-color: var(--c-background-tertiary);

    @media (min-width: 1000px) {
        display: block;
    }
`;


export default ContentPanel;