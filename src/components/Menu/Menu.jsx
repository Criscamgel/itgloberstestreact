import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../contexts/LoaderContext';
import { MenuContext } from '../../contexts/MenuContext';
import './Menu.scss';

export const Menu = () => {

  const [menus, setMenu] = useState([]);

  const { setAerolineaContext } = useContext(MenuContext);
  const { setShowLoader } = useContext(LoaderContext);

  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async() => {

    try {
    const resp = await axios.get(process.env.REACT_PROD_MENU_API_URL);
    const { data } = resp.data;
    data ? 
    activarLoader(data) 
    : 
    setShowLoader(false);
    }catch(err) {
      alert(`!UPS! Ocurrio un error con el servicio de menus, por favor vuelve a ingresar mas tarde, Error: ${err}`);
    }

  }

  const activarLoader = (data) => {
    setMenu(data);
    setTimeout(() => { 
      setShowLoader(true);
    }, 2000);
  }

  return (
    <div className="Menu">
      <ul>
        {
        menus.map( menu => {
          return <li 
                  key={ menu.id } 
                  onClick={() => {
                    setAerolineaContext(menu.name)
                  }} > { menu.name } </li>
        })  
        }
      </ul>
    </div>
  )
}

