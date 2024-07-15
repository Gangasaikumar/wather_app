import { Button, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { SearchOutlined, AimOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { CurrentWeather } from "../ApiCalls/CurrentWeather";
import { ReverseGeo } from "../ApiCalls/ReverseGeo";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWatherReport } from "../store/PresentweatherReportSlice";
import PopularLocationsList from "../components/PopularLocations";
import SearchResult from "../components/SearchResult";
import { GeoLocationData } from "../ApiCalls/GeoLocation";
import { CurrentForecast } from "../ApiCalls/CurrentForecast";
import { AirPolution } from "../ApiCalls/AirPolution";
import Loading from "../components/Loading";
import WhatherReport from "../components/WatherReport";

const Overview = () => {
  const [showSerchResultModel, setSearchResultModel] = useState(false);
  const [searchResult, setSearchResult] = useState<[]>([]);
  const [inputLocation, setInputLocation] = useState<string>("");
  const watherReport = useSelector(
    (state: any) => state.currentWather.watherReport
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  const serch_result_model = async () => {
    setSearchResultModel(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    const location_data:any = await GeoLocationData(inputLocation);
    setSearchResult(location_data);
    setTimeout(() => setLoading(false), 500);
  };

  const getWeatherData = async (latitude: number, longitude: number) => {
    const weatherData = await CurrentWeather(latitude, longitude);
    const reverseGio:any = await ReverseGeo(latitude, longitude);
    const foreCastData = await CurrentForecast(latitude, longitude);
    const airQualityData = await AirPolution(latitude, longitude);
    console.log("reverseGio::", reverseGio);
    dispatch(
      setCurrentWatherReport({
        currentReport: weatherData,
        locationName: reverseGio[0].name,
        forecastData: foreCastData,
        airPolutionData: airQualityData,
      })
    );
  };

  const setCurrentLocationWeather = async () => {
    window.navigator.geolocation.getCurrentPosition(async (res) => {
      const { latitude, longitude } = res.coords;
      getWeatherData(latitude, longitude);
    });
  };

  useEffect(() => {
    getWeatherData(17.375, 78.474);
  }, []);

  return (
    <Layout>
      <div className="px-8 h-20 w-full flex items-center justify-between">
        <div></div>
        <div className="flex items-center justify-center">
          <Input
            onChange={(e) => setInputLocation(e.target.value)}
            type="search"
            className="w-96 h-12 rounded-full"
            placeholder="search city..."
            prefix={<SearchOutlined />}
          />
          {/* model for showing serch result */}
          <SearchResult
            inputLocation={inputLocation}
            serch_result_model={serch_result_model}
            loading={loading}
            showSerchResultModel={showSerchResultModel}
            setSearchResultModel={setSearchResultModel}
            searchResult={searchResult}
            getWeatherData={getWeatherData}
          />
          <Button
            disabled={inputLocation ? false : true}
            shape="round"
            className="mx-2 w-36 h-12"
            type="primary"
            onClick={serch_result_model}
          >
            search
          </Button>
        </div>

        <Button
          type="primary"
          className="w-52 h-12 bg-yellow-500 hover:!bg-yellow-600 text-lg"
          shape="round"
          onClick={setCurrentLocationWeather}
        >
          <AimOutlined />
          Current Location
        </Button>
      </div>
      <Content>
        <PopularLocationsList
          getWeatherData={(lat: number, lon: number) => {
            getWeatherData(lat, lon);
          }}
        />
        {watherReport ? <WhatherReport /> : <Loading />}
      </Content>
    </Layout>
  );
};

export default Overview;
