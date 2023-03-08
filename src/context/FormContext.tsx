import React, { createContext, useState } from 'react';

interface ContextData {
    name: string,
    setName: (value: string) => void,
    phone: string,
    setPhone: (value: string) => void,
    email: string,
    setEmail: (value: string) => void,
    nameError: string, 
    setNameError: (value: string) => void,
    emailError: string, 
    setEmailError: (value: string) => void,
    phoneError: string, 
    setPhoneError: (value: string) => void,
}

export const FormContext = createContext({} as ContextData);

export function FormContextContextProvider({ children }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    return (
        <FormContext.Provider value={{
            name,
            setName,
            phone,
            setPhone,
            email,
            setEmail,
            nameError,
            setNameError,
            emailError,
            setEmailError,
            phoneError,
            setPhoneError,
        }}>
            {children}:Children
        </FormContext.Provider>
    );
}