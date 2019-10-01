import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Settings = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  background: #3a3a3a;

  time {
    color: #c2c3c4;
    font-size: 18px;
    display: none;

    ${breakpoint('tablet')`
      display: block;
    `}
  }

  a {
    color: #c2c3c4;
    font-size: 18px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 14px;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  border-bottom: 2px solid #c2c3c4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;

  @media (max-width: 1242px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  a {
    @media (max-width: 1242px) {
      display: none;
    }

    @media (max-width: 1024px) {
      display: block;
    }

    img {
      width: 90px;

      ${breakpoint('desktop')`
        width: 180px;
      `}
    }
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;

  @media (max-width: 1242px) {
    margin: 0;
  }
`;

export const MenuToggle = styled.div`
  display: none;

  svg {
    width: 2rem;
  }

  ${breakpoint('desktop')`
    display: block;
  `}
`;

export const SideNavToggle = styled.div`
  ${breakpoint('desktop')`
    display: none;
  `}
`;
