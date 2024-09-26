import React, { createContext, useContext, ReactNode } from 'react';
import { useElements } from '../hook/useElements'; // Adjust the path as necessary

interface ElementsContextType {
    elements: React.ReactNode[];
    createSampleButton: (ButtonComponent: React.ReactNode) => void;
}

const ElementsContext = createContext<ElementsContextType | undefined>(undefined);

export const ElementsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { elements, createSampleButton } = useElements();

    return (
        <ElementsContext.Provider value={{ elements, createSampleButton }}>
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
