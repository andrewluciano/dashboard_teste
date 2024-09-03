/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';


const baseURL = 'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=273bd426eddde336ec1713c5f08184dc';

class ApiGetCrypto {
    
  async getCrypto(search: any) {

    const data = {};

    const response = await axios.get(
      `${baseURL}`,
      data
    );
    return response;
  }
}

export default new ApiGetCrypto();
