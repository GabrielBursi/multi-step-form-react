import React, { createContext, useState } from 'react';

interface ContextData {
    step1: boolean,
    setStep1: (value: boolean) => void,
    step2: boolean,
    setStep2: (value: boolean) => void,
    step3: boolean,
    setStep3: (value: boolean) => void,
    step4: boolean,
    setStep4: (value: boolean) => void,
}

export const StepsContext = createContext({} as ContextData);

export function StepsContextContextProvider({ children }) {

    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    return (
        <StepsContext.Provider value={{
            step1,
            setStep1,
            step2,
            setStep2,
            step3,
            setStep3,
            step4,
            setStep4,
        }}>
            {children}:Children
        </StepsContext.Provider>
    );
}