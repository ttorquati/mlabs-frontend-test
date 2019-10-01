import React from 'react';

import Backdrop from '~/components/SideMenu/Backdrop';
import MenuItems from '~/components/MenuItems';

import { Nav } from './styles';

export default function SideMenu({ click }) {
  return (
    <>
      <Nav>
        <MenuItems click={click} />
      </Nav>
      <Backdrop click={click} />
    </>
  );
}
