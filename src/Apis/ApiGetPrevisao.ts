/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';


const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-23.533773&lon=-46.625290&appid=138532047deca1b82cfc11799deaabb1';

class ApiGetPrevisao {
    
  async getPrevisao(search: any) {

    const data = {};

    const response = await axios.get(
      `${baseURL}`,
      data
    );
    return response;
  }
}

export default new ApiGetPrevisao();
