import { type FC } from 'react';
import { Container } from "./styles";
import { Titulos } from '../../../../Componentes/Titulos';
import {Noticias} from "./Noticias";

// import { useQuery } from 'react-query';
// import ApiGetCrypto from 'src/apis/ApiGetCrypto';

interface IMyProps {
    
}
  

export const BlocoNoticias: FC<IMyProps> = () => {


  return (
    <Container direcao="vertical">
        <Titulos titulo="Noticias" />
        <Noticias /> 
    </Container>
  );
};

