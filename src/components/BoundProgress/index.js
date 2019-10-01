import React from 'react';

import { Container, BoundStep, BoundStepProgress } from './styles';

export default function BoundProgress() {
  return (
    <Container>
      <BoundStep checked>Verificação</BoundStep>
      <BoundStepProgress checked />
      <BoundStep checked>Páginas</BoundStep>
      <BoundStepProgress />
      <BoundStep>Segmento</BoundStep>
      <BoundStepProgress />
      <BoundStep>Concorrentes</BoundStep>
    </Container>
  );
}
