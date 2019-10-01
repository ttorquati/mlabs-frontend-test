import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import { FaBars, FaChevronDown, FaCog } from 'react-icons/fa';

import MenuItems from '~/components/MenuItems';
import SideMenu from '~/components/SideMenu';

import {
  Container,
  Settings,
  Menu,
  Logo,
  Wrapper,
  MenuToggle,
  SideNavToggle,
} from './styles';

import logo from '~/assets/mlabs.png';

export default function Header() {
  const [sideMenu, setSideMenu] = useState(false);

  function handleSideMenu() {
    setSideMenu(!sideMenu);
  }

  return (
    <Container>
      <Settings>
        <Clock format="DD/MM/YYYY HH:mm:ss" ticking />
        <Link to="/">
          MINHA CONTA <FaChevronDown size={16} color="#c2c3c4" />
        </Link>
        <Link to="/">
          <FaCog size={20} color="#c2c3c4" />
        </Link>
      </Settings>

      <Menu>
        <Logo>
          <Link to="/">
            <img src={logo} alt="mLabs" />
          </Link>
        </Logo>

        <Wrapper>
          <MenuToggle>
            <MenuItems />
          </MenuToggle>

          <SideNavToggle>
            <FaBars size={20} color="#666" onClick={handleSideMenu} />
          </SideNavToggle>

          {sideMenu && <SideMenu click={() => handleSideMenu(sideMenu)} />}
        </Wrapper>
      </Menu>
    </Container>
  );
}
