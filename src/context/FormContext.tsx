import React, { createContext, useState } from 'react';

interface ContextData {
    name: string,
    setName: (value: string) => void,
    phone: string,
    setPhone: (value: string) => void,
    email: string,
    setEmail: (value: string) => void,
}

export const FormContextContext = createContext({} as ContextData);

export function FormContextContextProvider({ children }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <FormContextContext.Provider value={{
            name,
            setName,
            phone,
            setPhone,
            email,
            setEmail
        }}>
            {children}
        </FormContextContext.Provider>
    );
}