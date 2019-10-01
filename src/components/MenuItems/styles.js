import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid #e7e7e7;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 6px 10px;

    width: 100%;
    height: 100%;
    text-align: center;

    color: ${props => (props.selected ? '#f00' : '#c2c3c4')};
    background: ${props => (props.selected ? '#eff0f0' : 'transparent')};

    transition-property: background, color;
    transition-duration: 0.3s;

    ${props =>
      props.newFeature &&
      css`
        &::after {
          content: 'NOVO';
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          right: 10px;
          top: 10px;
          width: 40px;
          height: 18px;
          background: #faad21;
          color: #eee;
          border-radius: 20px;
        }
      `}

    ${breakpoint('desktop')`
      display: block;
      font-size: 1rem;
      padding: 1rem;
    `}

    &:hover {
      color: #3a3a3a;
      background: #eff0f0;

      svg {
        color: #3a3a3a;
      }
    }

    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      color: ${props => (props.selected ? '#3a3a3a' : '#c2c3c4')};

      ${breakpoint('desktop')`
        text-align: center;
        display: block;
        margin: 0 auto 10px;
      `}
    }
  }
`;
