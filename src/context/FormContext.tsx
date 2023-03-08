import React, { createContext, useState } from 'react';

interface ContextData {
    name: string,
    setName: (value: string) => void,
    phone: string,
    setPhone: (value: string) => void,
    email: string,
    setEmail: (value: string) => void,
}

export const FormContext = createContext({} as ContextData);

export function FormContextContextProvider({ children }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <FormContext.Provider value={{
            name,
            setName,
            phone,
            setPhone,
            email,
            setEmail
        }}>
            {children}:Children
        </FormContext.Provider>
    );
}