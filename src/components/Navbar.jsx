import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from 'devextreme-react/menu';
import { Item } from 'devextreme-react/form';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Menu
      adaptivityEnabled={true}
    >
      <Item
        icon='home'
        text='Home'
        onClick={() => navigate('/')}
      />
      <Item
        icon='user'
        text='Profile'
        onClick={() => navigate('/profile')}
      />
      <Item
        text='Logout'
        icon='runner'
        onClick={() => {
          localStorage.removeItem('authToken');
          navigate('/login');
        }}
      />
    </Menu>
  )
}

export default Navbar;