import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';
import breakpoint from 'styled-components-breakpoint';
import PerfectScrollbar from 'react-perfect-scrollbar';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  ${css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;

export const Wrapper = styled.div``;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  ${breakpoint('desktop')`
    height: 100%;
    min-width: 600px;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 22px;

  div {
    display: flex;
    align-items: center;

    img {
      height: 50px;
      width: 50px;
      margin-right: 20px;
    }

    strong {
      font-size: 24px;
      font-weight: normal;

      span {
        text-transform: capitalize;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  strong {
    text-align: center;
    font-size: 16px;
    margin: 0 20px;
  }
`;

export const ProfileList = styled.ul`
  max-height: 160px;
  background: #f0f0f0;
  margin: 20px;
  overflow: hidden;
  padding-left: 20px;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 160px;
  padding-right: 20px;
`;

export const Profile = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;

  & + li {
    border-top: 1px solid #fff;
  }

  > div {
    display: flex;
    align-items: center;

    img {
      border: 1px solid #666;
      width: 40px;
      height: 40px;
      margin-right: 10px;

      ${breakpoint('desktop')`
        width: 50px;
        height: 50px;
      `}
    }

    div {
      max-width: 200px;

      ${breakpoint('desktop')`
        max-width: 100%;
      `}

      strong {
        display: block;
        text-align: left;
        font-size: 14px;

        ${breakpoint('desktop')`
          font-size: 18px;
        `}
      }

      a {
        display: block;
        margin-top: 4px;
        text-align: left;
        font-size: 11px;
        color: #999;
        word-break: break-all;

        ${breakpoint('desktop')`
          font-size: 14px;
        `}
      }
    }
  }
`;

export const PageSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;

  strong {
    display: block;
    color: #999;
    font-weight: normal;
  }

  a {
    display: block;
    margin-top: 8px;
    color: #4990e0;
    font-weight: bold;
    font-size: 14px;
    text-decoration: underline;
    text-align: center;
  }
`;

export const SubmitSection = styled.div`
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 22px 18px;

  border-radius: 0 0 4px 4px;

  a {
    color: #535353;
  }

  button {
    border: none;
    background: #4990e0;
    color: #fff;
    padding: 10px 14px;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#4990e0')};
    }

    svg {
      margin-left: 12px;
    }
  }
`;
