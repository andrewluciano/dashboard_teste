import { type FC } from 'react';
import { Container } from "./styles";
import { Titulos } from 'src/Componentes/Titulos';
import {Moedas} from "./Moedas";


interface IMyProps { 
  key:number 
}

export const BlocoMoedas: FC<IMyProps> = () => {

  return (
   <>
    <Container direcao="vertical">
      <Titulos titulo={"Crypto"} />
      <Moedas id={0}  /> 
    </Container>
   </>
  );
};


