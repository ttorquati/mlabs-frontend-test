import styled from 'styled-components';
import { darken } from 'polished';
import breakpoint from 'styled-components-breakpoint';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Dashboard = styled.ul`
  padding: 40px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));

  text-align: center;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

export const MediaAccountBound = styled.li`
  background: ${props => props.backgroundColor};
  display: flex;
  align-items: center;

  align-self: center;
  flex-direction: column;
  margin: 0 auto;

  min-width: 86%;
  min-height: 400px;

  ${breakpoint('tablet')`
    margin: 0;
    min-width: 340px;    
  `}

  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    transition: background 0.2s;

    &:hover {
      background: ${props => darken(0.1, props.backgroundColor)};
    }

    strong {
      padding: 20px;
      font-size: 18px;
      font-weight: normal;
      color: #fff;
      display: block;
      background: ${props => darken(0.1, props.backgroundColor)};
    }

    img {
      margin-top: 10px;
      margin-left: 10px;
      width: 100px;
      height: 100px;
    }
  }
`;

export const Media = styled.li`
  border: 2px dashed #c2c3c4;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  margin: 0 auto;

  min-width: 86%;
  min-height: 400px;

  position: relative;

  ${breakpoint('tablet')`
    margin: 0;
    min-width: 340px;    
  `}

  img {
    width: 100px;
    height: 100px;
    font-size: 20px;
  }

  span {
    display: block;
    margin-top: 24px;
    font-size: 1.5rem;
    color: #535353;
    text-transform: uppercase;
    overflow-wrap: break-word;
  }

  a {
    display: block;
    margin-top: 28px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    background-color: #de2e4d;
    color: #fff;
    padding: 14px 30px;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${darken(0.1, '#de2e4d')};
    }
  }
`;

export const HelperContainer = styled.div`
  position: absolute;
  right: 28%;
  top: 20%;

  font-size: 18px;
  color: #fff;

  button {
    position: relative;
    border: 0;
    background: none;

    font-size: 16px;
    font-weight: bold;
    width: 24px;
    height: 24px;
    color: #999;
    border: 2px solid #999;
    border-radius: 50%;
  }
`;
