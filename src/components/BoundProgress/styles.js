import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 22px 36px;

  position: relative;
`;

export const BoundStep = styled.span`
  &::before {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    margin: 0 auto 4px;
    background: ${props => (props.checked ? '#faad21' : '#CCC')};
    border-radius: 50%;
  }
`;

export const BoundStepProgress = styled.div`
  height: 1px;
  width: 60px;
  background: ${props => (props.checked ? '#faad21' : '#CCC')};
  position: relative;
  top: 0px;
`;
