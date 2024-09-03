import { type FC } from 'react';
import { Container, TituloPagina, Imprimir, Compartilhar } from "./styles";
 

interface IMyProps {
}
export const Cabecalho: FC<IMyProps> = (props: IMyProps) => {

  return (
    <Container>
        <TituloPagina>Dashboard</TituloPagina>
        <Compartilhar />
        <Imprimir />
    </Container>
  );
};
