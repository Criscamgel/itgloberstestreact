import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Menu.scss';

export const Menu = () => {

  const [menus, setMenu] = useState([]);

  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async() => {
    const resp = await axios.get(process.env.REACT_APP_DEV_MENU_API_URL);
    const { data } = resp.data;
    setMenu(data);
  }

  return (
    <>
      {<ul>
        {
        menus.map( menu => {
          return <li key={ menu.id }> { menu.name } </li>
        })  
        }
      </ul>}
    </>
  )
}

