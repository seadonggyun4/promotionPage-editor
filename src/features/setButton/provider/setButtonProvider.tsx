import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';

type SelectedButtonType = 'SampleBtn' | 'GradationBtn' | null;

type SelectedButtonContextType = {
    selectedBtn: SelectedButtonType,
    setSelectedBtn: Dispatch<SetStateAction<SelectedButtonType>>
}

export const SetButtonContext = createContext<SelectedButtonContextType | undefined>(undefined);

export const SetButtonProvider= ({ children }: { children: ReactNode }) => {
    const [selectedBtn, setSelectedBtn] = useState<SelectedButtonType>(null);

    return (
        <SetButtonContext.Provider value={{ selectedBtn, setSelectedBtn }}>
            {children}
        </SetButtonContext.Provider>
    );
};

export const useSetButtonContext = () => {
    const context = useContext(SetButtonContext);
    if (context === undefined) {
        throw new Error('useSelectedButtonContext must be used within a SelectedButtonProvider');
    }
    return context;
};

