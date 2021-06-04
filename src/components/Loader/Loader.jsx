import React, { useEffect, useState } from 'react';
import './Loader.scss';

export const Loader = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => { 
            setShow(true);
         }, 2000);
    }, [])

    return (
        <>
          { 
            !show ?
            <div className="Loader">
                <div className="loader"></div>
            </div> :
            null    
          }  
        </>
    )
}
