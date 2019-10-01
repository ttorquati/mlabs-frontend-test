import React from 'react';

import { Container } from './styles';

export default function Backdrop({ click }) {
  return <Container onClick={click} />;
}
