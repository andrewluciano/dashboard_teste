
import { type FC } from 'react';
import {  ContainerNoticia, Imagem, AreaTexto ,Noticia, TituloNoticia,Olho  } from './styles';


interface IMyProps {
    id:number
}
  

export const Moedas: FC<IMyProps> = (props: IMyProps) => {

  return (
        <ContainerNoticia>
            <Noticia>
                <Imagem><img src="http://lorempixel.com.br/75/75/?1" /></Imagem>
                <AreaTexto>
                    <TituloNoticia>The 25 Best Restaurants in New Orleans Right Now</TituloNoticia>
                    <Olho>There’s plenty of great Creole and Cajun food, of course, but also outstanding Vietnamese, Indian and Trinbagonian cuisine.</Olho>
                </AreaTexto>
            </Noticia>
        </ContainerNoticia>    
    )
}
