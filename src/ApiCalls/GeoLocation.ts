import axios from 'axios';
axios.defaults.withCredentials = true;
import config from '../config/config';

export const GeoLocationData = (query:string) => {
  const options = {
    method: 'GET',
    url:config.Geo,
    params: { q:query,appid:config.weather_API_KEY,limit:5 },
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
