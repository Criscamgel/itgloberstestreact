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
            <div className={ !show ? 'Loader fade-in' : 'Loader fade-out'  }>
                <div className="loader"></div>
            </div>
        </>
    )
}
