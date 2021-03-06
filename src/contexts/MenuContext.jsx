import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = (props) => {

    const [aerolineaContext, setAerolineaContext] = useState(null);

    return (
        <MenuContext.Provider
            value={{
                aerolineaContext,
                setAerolineaContext  
            }}
        >
            { props.children }
        </MenuContext.Provider>
    )
}
