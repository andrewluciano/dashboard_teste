import { type FC } from 'react';
import { H2 } from "./styles";


interface IMyProps {
  titulo:any
}

export const Titulos: FC<IMyProps> = (props: IMyProps) => {

  return (
    <H2>{props.titulo}</H2>
  );
};

