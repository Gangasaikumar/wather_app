import Zero1D from "../assets/weather_icons/01d.png";
import Zero1N from "../assets/weather_icons/01n.png";
import Zero2D from "../assets/weather_icons/02d.png";
import Zero2N from "../assets/weather_icons/02n.png";
import Zero3D from "../assets/weather_icons/03d.png";
import Zero3N from "../assets/weather_icons/03n.png";
import Zero4D from "../assets/weather_icons/04d.png";
import Zero4N from "../assets/weather_icons/04n.png";
import Zero9D from "../assets/weather_icons/09d.png";
import Zero9N from "../assets/weather_icons/09n.png";
import Ten_D from "../assets/weather_icons/10d.png";
import Ten_N from "../assets/weather_icons/10n.png";
import Leven_D from "../assets/weather_icons/11d.png";
import Leven_N from "../assets/weather_icons/11n.png";
import Therteen_D from "../assets/weather_icons/13d.png";
import Therteen_N from "../assets/weather_icons/13n.png";
import Fifty_D from "../assets/weather_icons/50d.png";
import Fifty_N from "../assets/weather_icons/50n.png";
import Direction from "../assets/weather_icons/direction.png";

export const WATHER_ICONS = {
  "01d": Zero1D,
  "01n": Zero1N,
  "02d": Zero2D,
  "02n": Zero2N,
  "03d": Zero3D,
  "03n": Zero3N,
  "04d": Zero4D,
  "04n": Zero4N,
  "09d": Zero9D,
  "09n": Zero9N,
  "10d": Ten_D,
  "10n": Ten_N,
  "11d": Leven_D,
  "11n": Leven_N,
  "13d": Therteen_D,
  "13n": Therteen_N,
  "50d": Fifty_D,
  "50n": Fifty_N,
  "direction": Direction,
};


export const getWatherIcon = (iconName: string) => {
    switch (iconName) {
      case "01d":
        return Zero1D;
      case "01n":
        return Zero1N;
      case "02d":
        return Zero2D;
      case "02n":
        return Zero2N;
      case "03d":
        return Zero3D;
      case "03n":
        return Zero3N;
      case "04d":
        return Zero4D;
      case "04n":
        return Zero4N;
      case "09d":
        return Zero9D;
      case "09n":
        return Zero9N;
      case "10d":
        return Ten_D;
      case "10n":
        return Ten_N;
      case "11d":
        return Leven_D;
      case "11n":
        return Leven_N;
      case "13d":
        return Therteen_D;
      case "13n":
        return Therteen_N;
      case "50d":
        return Fifty_D;
      case "50n":
        return Fifty_N;
      case "direction":
        return Direction;
    }
  };