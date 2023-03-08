import React from 'react';
import { Children } from '../types/Children';
import { ChoiceOptionsContextProvider } from './ChoiceOptionsContext';
import { FormContextContextProvider } from './FormContext';
import { StepsContextContextProvider } from './StepsContext';

export function ProviderContext({children}:Children) {
    return (
        <StepsContextContextProvider>
            <FormContextContextProvider>
                <ChoiceOptionsContextProvider>
                    {children}:Children
                </ChoiceOptionsContextProvider>
            </FormContextContextProvider>
        </StepsContextContextProvider>
    );
}