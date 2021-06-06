import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../contexts/FormContext';
import './Modal.scss';


export const Modal = () => {

    const { showModal } = useContext(FormContext);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        if( showModal ) {
            setMostrarModal(true);
            setTimeout(() => {
                setMostrarModal(false);
             }, 5000);

        }
      }, [ showModal ])

    return (
        <div className={ mostrarModal ? 'Modal fade-in' : 'Modal fade-out' }>
             <div className="modalContent">
                <p>Tu información fue enviada con éxito, estaremos en contacto
                   contigo</p>
                <i className="fa fa-check-circle"> </i>
             </div>           
        </div>
    )
}
