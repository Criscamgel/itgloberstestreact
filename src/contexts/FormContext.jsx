import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {

    const [datos, setDatos] = useState(null);
    const [showModal, setShowModal] = useState(false);

    return (
        <FormContext.Provider
            value={{
                datos,
                setDatos,
                showModal,
                setShowModal  
            }}
        >
            { props.children }
        </FormContext.Provider>
    )
}