import React from 'react'
import './App.scss';
import { Inicio } from '../Inicio/Inicio';
import { Loader } from '../Loader/Loader';
import { Menu } from '../Menu/Menu';
import { MenuProvider } from '../../contexts/MenuContext';
import { FormProvider } from '../../contexts/FormContext';
import { Modal } from '../Modal/Modal';
import { LoaderProvider } from '../../contexts/LoaderContext';

export const App = () => {
  return (
      
      <FormProvider>
        <LoaderProvider>
        <MenuProvider>
          <div className="superContenedor">
            <div className="externo">
              <Loader />
              <Modal />
            </div>

            <div className="principal">
              <Menu />
              <Inicio />
            </div>
        </div>
        </MenuProvider>
        </LoaderProvider>
      </FormProvider>
      
    
  )
}


