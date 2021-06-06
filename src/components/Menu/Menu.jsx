import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import './Menu.scss';

export const Menu = () => {

  const [menus, setMenu] = useState([]);

  const { setAerolineaContext } = useContext(MenuContext);

  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async() => {
    const resp = await axios.get(process.env.REACT_APP_PROD_MENU_API_URL);
    const { data } = resp.data;
    setMenu(data);
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

