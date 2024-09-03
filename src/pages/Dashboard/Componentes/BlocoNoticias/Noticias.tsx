import { useState, type FC } from 'react';
import {  ContainerNoticia, Imagem, AreaTexto ,Noticia, TituloNoticia,Olho  } from './styles';

import { useQuery } from 'react-query';
import ApiGetNoticias from 'src/Apis/ApiGetNoticias';

interface IMyProps {}


export const Noticias: FC<IMyProps> = () => {

    const [dados, setDados] = useState([]);



    const dadosApiGetNoticias = useQuery(['listaDadosApiGetNoticias'], async () => {
      const response = await ApiGetNoticias.getNoticias();
      console.log('response',response)
      // if (response?.isSuccessStatusCode) {
          setDados(response?.data?.items);
      // }
    });
    const isFetching = dadosApiGetNoticias?.isFetching;
    console.log('dados noticias', dados)
    
  return (
        <ContainerNoticia>

        {isFetching && <p>Carregando</p> }
            {!isFetching && (
                dados?.map((item: any,index) => {
                    return (
                        <>
                            <Noticia key={index}>
                                {/* <Imagem><img src="http://lorempixel.com.br/75/75/?1" /></Imagem> */}
                                <AreaTexto>
                                    <TituloNoticia>{item?.titulo}</TituloNoticia>
                                    <Olho>{item?.introducao}</Olho>
                                </AreaTexto>
                            </Noticia>                            
                        </>
                    )

                })
            )}

        </ContainerNoticia>    
    )
}
