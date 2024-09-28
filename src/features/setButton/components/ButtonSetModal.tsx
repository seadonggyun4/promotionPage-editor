import React from 'react';
import styled from 'styled-components';
import SimpleBtnForm from "./SimpleBtnForm";
import { useElementsContext } from "../../..//app/provider/ElementsProvider";
import { useSimpleBtn } from "../hook/useSimpleBtn";

interface ButtonSetModalProps {
    selectedBtn: string;
    closeModal: () => void;
    children: React.ReactElement;
}

function ButtonSetModal ({selectedBtn, closeModal, children}: ButtonSetModalProps) {
    const { createSampleButton } = useElementsContext()
    const simpleBtnHook = useSimpleBtn();

    const checkSelectedBtn = (selectedBtn : string) => {
        if (selectedBtn === 'SampleBtn') {
            return React.cloneElement(children, simpleBtnHook.customButton(children));
        }
        return children;
    }

    const customButton = checkSelectedBtn(selectedBtn);

    const addButton = () => {
        createSampleButton(customButton)
        closeModal()
    }

    return (
        <ModalWrapper>
            <ModalInner>
                <ElementWrapper>
                    <div style={{width: '200px'}}>
                        {customButton}
                    </div>
                </ElementWrapper>
                <ElementSettingBox>
                    { selectedBtn === 'SampleBtn' && <SimpleBtnForm simpleBtnHook={simpleBtnHook}/> }
                    <BtnWrapper>
                    <button className="activeBtn" onClick={addButton}>등록</button>
                        <button className="cancelBtn" onClick={closeModal}>취소</button>
                    </BtnWrapper>
                </ElementSettingBox>
            </ModalInner>
        </ModalWrapper>
    )
}

// modal
const ModalWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    animation: show 0.3s ease-in-out forwards;
    
    @keyframes show {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;
const ModalInner = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    width: 1000px;
    height: 500px;
    background-color: var(--c-background-secondary);
    border-radius: 15px;
    padding: 20px;
    animation: popUp 0.3s ease-in-out forwards;

    @keyframes popUp {
        0%{
            transform: scale(0.9);
        }
        100%{
            transform: scale(1);
        }
    }
    
`;
const ElementWrapper = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-background-tertiary);
`
const ElementSettingBox = styled.article`
    width: 400px;
    height: 100%;
    border-radius: 15px;
`
// btnWrap
const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    
    & .activeBtn, & .cancelBtn{
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
    }

    & .activeBtn:hover{
        color: #ffffff;
        background-color: var(--c-accent-primary);
    }

    & .cancelBtn:hover{
        color: #ffffff;
        background-color: var(--c-accent-warning);
    }
`

export default ButtonSetModal;