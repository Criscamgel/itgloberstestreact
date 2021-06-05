import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import './Inicio.scss';
import aerolineas from '../../images/aerolineas.png';

export const Inicio = () => {

  const { aerolineaContext } = useContext( MenuContext );

    return (
        <div className="Inicio">
          { !aerolineaContext ?
          <div className="sinOpcion">
            <div className="contenidoSinOpcion">
              <h3>Escoge una opción para comenzar</h3>
              <img src={ aerolineas } alt="" />
            </div>
          </div>
            :
          <div className="conOpcion">
            <h2>Bienvenido a {aerolineaContext} </h2>
          </div>        
          }
         </ div>
    )
}

