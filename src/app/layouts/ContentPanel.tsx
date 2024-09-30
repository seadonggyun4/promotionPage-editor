import styled from "styled-components";

import UploadArea from '../../features/uploadImage/components/UploadArea'
import ButtonBox from "../../features/setButton/components/ButtonBox";
import {MENU} from "../../constant/global";

interface ContentPanelProps {
    menuActive : string,
}

function ContentPanel({menuActive} :ContentPanelProps) {
    return(
        <ContentPanelStyle>
            { MENU[0] ===  menuActive ? <UploadArea /> : '' }
            { MENU[1] ===  menuActive ? <ButtonBox /> : '' }
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