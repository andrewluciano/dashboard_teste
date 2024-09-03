import { useState, type FC } from 'react';
import { ContainerNoticia, Imagem, AreaTexto ,Noticia, TituloNoticia,Olho  } from './styles';

import { useQuery } from 'react-query';
import ApiGetPrevisao from 'src/Apis/ApiGetPrevisao';
// import  { type IPrevisao } from 'src/interfaces/Previsao';
// import { useFetch } from 'src/hooks/useFetch';
import dateTimeSeconds from 'src/helpers/format';

interface IMyProps { 
  }
  
export const Previsao: FC<IMyProps> = () => {
    const [dados, setDados] = useState([]);



  const dadosApiGetPrevisao = useQuery(['listaDadosApiGetPrevisao'], async () => {
    const response = await ApiGetPrevisao.getPrevisao();
    console.log('response',response)
    // if (response?.isSuccessStatusCode) {
        setDados(response?.data?.list);
    // }
  });
  
  const isFetching = dadosApiGetPrevisao?.isFetching;

      console.log('fetching',isFetching)
    
      console.log('dados PREVISAO',dados)
  return (
        <ContainerNoticia>
            {isFetching && <p>Carregando</p> }
            {!isFetching && (                
                dados?.map((item: any,index) => {
                    return (
                        <Noticia>
                            {/* <Imagem><img src="http://lorempixel.com.br/75/75/?1" /></Imagem> */}
                            <AreaTexto>
                                <TituloNoticia>{dateTimeSeconds(item?.dt_txt)}</TituloNoticia>
                                <Olho>{item?.main?.temp}</Olho>
                            </AreaTexto>
                        </Noticia>
                    )

                })

            )}


           
        </ContainerNoticia>    
    )
}
