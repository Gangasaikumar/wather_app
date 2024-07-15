import hydLogo from "../assets/cities/hyderabad.svg";
import DelhiLogo from "../assets/cities/Delhi.svg";
import ChennaiLogo from "../assets/cities/Chennai.svg";
import KochiLogo from "../assets/cities/Kochi.svg";
import MumbaiLogo from "../assets/cities/Mumbai.svg";

interface geoLocation {
  lat: number;
  lon: number;
}
interface Location {
  geoLocation: geoLocation;
}
interface CityLogos extends Location {
  imgPath: string;
  title: string;
}
const citiesWithLogo: Array<CityLogos> = [
  {
    imgPath: hydLogo,
    title: "Hyderabad",
    geoLocation: { lat: 17.375, lon: 78.474 },
  },
  {
    imgPath: DelhiLogo,
    title: "Delhi",
    geoLocation: { lat: 28.6517178, lon: 77.2219388 },
  },
  {
    imgPath: ChennaiLogo,
    title: "Chennai",
    geoLocation: { lat: 13.088, lon: 80.278 },
  },
  {
    imgPath: KochiLogo,
    title: "Kochi",
    geoLocation: { lat: 9.94, lon: 76.26 },
  },
  {
    imgPath: MumbaiLogo,
    title: "Mumbai",
    geoLocation: { lat: 19.014, lon: 72.848 },
  },
];

const PopularLocationsList = (props: { getWeatherData: (arg0: number, arg1: number) => void; }) => {
  const getLocation = (geoLocation: geoLocation) => {
    props.getWeatherData(geoLocation.lat, geoLocation.lon);
  };
  return (
    <>
      <h1 className="text-2xl mb-4">Popular cites</h1>
      <div className=" w-full align-middle justify-center items-center grid grid-cols-[repeat(5,1fr)] gap-2">
        {citiesWithLogo.map((eachCity: CityLogos) => (
          <div
            key={eachCity.title}
            onClick={() => getLocation(eachCity.geoLocation)}
            className="text-gray-700 hover:text-yellow-400 text-center p-6 bg-white shadow-md outline outline-1 outline-gray-300 outline-offset-[-1.5rem] cursor-pointer hover:outline hover:outline-[0.2rem] hover:outline-amber-300 hover:outline-offset-0 hover:scale-90 transition-transform"
          >
            <img
              src={eachCity.imgPath}
              alt={eachCity.title}
              className="p-2 h-20 hover:scale-90 transition-transform mx-auto"
            />
            <h3 className="py-2 text-xl">{eachCity.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularLocationsList;
