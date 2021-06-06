import React, { createContext, useState } from 'react';

export const LoaderContext = createContext();

export const LoaderProvider = (props) => {

    const [showLoader, setShowLoader] = useState(false);

    return (
        <LoaderContext.Provider
            value={{
                showLoader,
                setShowLoader 
            }}
        >
            { props.children }
        </LoaderContext.Provider>
    )
}