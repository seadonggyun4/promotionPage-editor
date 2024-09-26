import React, { createContext, useContext, ReactNode } from 'react';
import { useElements, UseElementsReturnType } from '../hook/useElements'; // Adjust the path as necessary

// 컨텍스트 타입을 useElements의 반환값과 일치시키기
interface ElementsContextType extends UseElementsReturnType {}

const ElementsContext = createContext<ElementsContextType | undefined>(undefined);

export const ElementsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // useElements의 반환값을 구조 분해 할당으로 받기
    const elementsContextValue = useElements();

    return (
        <ElementsContext.Provider value={elementsContextValue}>
            {children}
        </ElementsContext.Provider>
    );
};

// Custom hook to use the Elements context
export const useElementsContext = () => {
    const context = useContext(ElementsContext);
    if (!context) {
        throw new Error('useElementsContext must be used within an ElementsProvider');
    }
    return context;
};
