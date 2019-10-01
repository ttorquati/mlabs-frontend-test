import React from 'react';
import { Link } from 'react-router-dom';

import {
  FaTachometerAlt,
  FaRegCalendarPlus,
  FaRegCalendarAlt,
  FaInbox,
  FaRegNewspaper,
  FaRegEdit,
  FaChartPie,
} from 'react-icons/fa';

import { MdTimeline } from 'react-icons/md';

import { MenuList, MenuItem } from './styles';

export default function MenuItems({ click }) {
  return (
    <MenuList>
      <MenuItem selected>
        <Link to="/" onClick={click}>
          <FaTachometerAlt size={40} />
          DASHBOARD
        </Link>
      </MenuItem>

      <MenuItem newFeature>
        <Link to="/" onClick={click}>
          <FaRegCalendarPlus size={40} />
          AGENDAR POST
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <FaRegCalendarAlt size={40} />
          CALENDÁRIO
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <FaInbox size={40} />
          INBOX
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <FaRegNewspaper size={40} />
          FEED
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <FaRegEdit size={40} />
          WORKFLOW
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <MdTimeline size={40} />
          ACOMPANHAMENTO
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/" onClick={click}>
          <FaChartPie size={40} />
          RELATÓRIOS
        </Link>
      </MenuItem>
    </MenuList>
  );
}
