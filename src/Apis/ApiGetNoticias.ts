/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';


const baseURL = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

class ApiGetNoticias {
    
  async getNoticias() {

    const data = {};

    const response = await axios.get(
      `${baseURL}`,
      data
    );
    return response;
  }
}

export default new ApiGetNoticias();
