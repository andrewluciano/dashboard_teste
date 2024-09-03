import { type FC } from 'react';
import {Cabecalho} from './Componentes/Cabecalho';
import {BlocoNoticias} from './Componentes/BlocoNoticias';
import {BlocoMoedas} from './Componentes/BlocoMoeda';
import {BlocoPrevisao} from './Componentes/BlocoPrevisao';

import { Container, AreaDireita } from './Styles'

export const Dashboard: FC = () => {

  return (
    <Container>
        <Cabecalho />
        <BlocoNoticias />
        <AreaDireita>
          <BlocoMoedas key={3} />
          <BlocoPrevisao key={4} />        
        </AreaDireita>
    </Container>
  );
};

