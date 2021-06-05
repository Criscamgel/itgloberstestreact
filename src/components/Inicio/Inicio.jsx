import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import './Inicio.scss';
import aerolineas from '../../images/aerolineas.png';
import { Formulario } from '../Formulario/Formulario';

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
              <div className="contenidoConOpcion">
                <p>“Hola, bienvenido, sabemos que quieres viajar con <b>{aerolineaContext}</b>, por favor
                diligencia el siguiente formulario: </p>
              </div>
              <hr />
              <Formulario />
          </div>        
          }
         </ div>
    )
}

