import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Nav = styled.nav`
  height: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;

  ${breakpoint('desktop')`
    display: none;
  `}
`;
