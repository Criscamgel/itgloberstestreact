import React from 'react'
import './App.scss';
import { Inicio } from './components/Inicio/Inicio';
import { Loader } from './components/Loader/Loader';
import { Menu } from './components/Menu/Menu';

export const App = () => {
  return (
    <div className="superContenedor">
      <div className="externo">
        <Loader />
      </div>

      <div className="principal">
        <Menu />
        <Inicio />
      </div>
    </div>
  )
}


