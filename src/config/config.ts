const BaseAPI_1="https://api.openweathermap.org/data/2.5/";
const BaseAPI_2="http://api.openweathermap.org/geo/1.0/"
const config = {
 weather_API_KEY:"6201969a2b7ac2781b2a9f61ad9f5f44",
//  BaseAPI's
CurrentWeather:`${BaseAPI_1}weather`,
CurrentForecast:`${BaseAPI_1}forecast`,
AirPolution:`${BaseAPI_1}air_pollution`,
ReverseGeo:`${BaseAPI_2}reverse`,
Geo:`${BaseAPI_2}direct`
};

export default config;
