import { type FC } from 'react';

import { Container } from "./styles";
import {Titulos} from "src/Componentes/Titulos";
import {Previsao} from "./Previsao";

interface IMyProps { 
  key:number 
}

export const BlocoPrevisao: FC<IMyProps> = () => {

  return (
    <Container direcao="vertical">
        <Titulos titulo="Previsão" />
        <Previsao /> 
    </Container>
  );
}; 


