import axios from 'axios';
axios.defaults.withCredentials = true;
import config from '../config/config';

export const CurrentForecast = (lat: number, lon: number) => {
  const options = {
    method: 'GET',
    url:config.CurrentForecast,
    params: { lat:lat,lon:lon,appid:config.weather_API_KEY,units:"metric" },
    withCredentials: false
  };
  return new Promise<void>((resolve) => {
    axios
      .request(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};
