import React, { useContext } from 'react';
import { LoaderContext } from '../../contexts/LoaderContext';
import './Loader.scss';

export const Loader = () => {

    const { showLoader } = useContext(LoaderContext);

    return (
        <>
            <div className={ !showLoader ? 'Loader fade-in' : 'Loader fade-out'  }>
                <div className="loader"></div>
            </div>
        </>
    )
}
