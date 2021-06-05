import React from 'react'
import './App.scss';
import { Inicio } from './components/Inicio/Inicio';
import { Loader } from './components/Loader/Loader';
import { Menu } from './components/Menu/Menu';
import { MenuProvider } from './contexts/MenuContext';

export const App = () => {
  return (
      
      <MenuProvider>
        <div className="superContenedor">
          <div className="externo">
            <Loader />
          </div>

          <div className="principal">
            <Menu />
            <Inicio />
          </div>
      </div>
      </MenuProvider>
      
    
  )
}


