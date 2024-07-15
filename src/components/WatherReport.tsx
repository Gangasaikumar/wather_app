import { useSelector } from "react-redux";
import "./css/WatherReport.styles.css";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { getWatherIcon } from "../Healper/WatherIcons";
import {
  aqiText,
  getDate,
  getHours,
  getTime,
  monthNames,
  weekDayNames,
} from "../Healper/Healper.module";
import Loading from "./Loading";

const WatherReport = () => {
  const watherReport:any = useSelector(
    (state: any) => state.currentWather.watherReport
  );

return (
    <>
      {watherReport ? <Layout>
        <Content className="mt-6 mr-4 mb-0 p-6 rounded-lg shadow-slate-300">
          <h1 className="text-2xl my-4">
            Wather In "
            <span className="text-yellow-400">
              {watherReport?.locationName}
            </span>
            "
          </h1>

          <main className="text-white">
            <article className="main-container">
              {/* left side container data */}
              <div className=" sticky top-0 h-full flex flex-col gap-4">
                <section
                  className="bg-gray-800 rounded-3xl"
                  aria-label="current weather"
                >
                  <div className="p-9">
                    <h2 className="text-3xl">Now</h2>
                    <div className="flex">
                      <p className="text-8xl">
                        {parseInt(watherReport?.currentReport.main.temp)}&deg;
                        <sup>c</sup>
                      </p>
                      <img
                        className="w-60"
                        src={getWatherIcon(
                          watherReport?.currentReport.weather[0].icon
                        )}
                        width="64"
                        height="64"
                        alt={watherReport?.currentReport.weather[0].description}
                      />
                    </div>
                    <p className="text-2xl">
                      {watherReport?.currentReport.weather[0].description}
                    </p>

                    <ul className=" flex gap-2 mt-4 flex-col pt-4 border-t border-gray-300">
                      <li className="flex align-middle items-center gap-4">
                        <span className="m-icon text-sm">calendar_today</span>
                        <p>
                          {getDate(
                            watherReport?.currentReport.dt,
                            watherReport?.currentReport.timezone
                          )}
                        </p>
                      </li>
                      <li className="flex align-middle items-center gap-4">
                        <span className="m-icon">location_on</span>
                        <p>
                          {watherReport?.currentReport.name},
                          {watherReport?.currentReport.sys.country}
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* left conainer bottom 5 days forecast data*/}

                <section
                  className="bg-green-500 rounded-3xl p-9"
                  aria-labelledby="forecast-label"
                >
                  <h2 className="text-white text-bold  text-xl mb-4">
                    5 Days Forecast
                  </h2>
                  <div>
                    <ul>
                      {watherReport?.forecastData.list.map(
                        (forecast: any, index: number) =>
                          index % 8 === 7 && (
                            <div key={index}>
                              <li className="flex flex-row gap-16">
                                <div className="flex flex-row gap-4">
                                  <img
                                    src={getWatherIcon(
                                      forecast?.weather[0].icon
                                    )}
                                    width="36"
                                    height="36"
                                    alt={forecast?.weather[0].description}
                                    title={forecast?.weather[0].description}
                                  />

                                  <span>
                                    <p>
                                      {parseInt(forecast?.main.temp_max)}&deg;
                                    </p>
                                  </span>
                                </div>
                                <p>
                                  {new Date(forecast?.dt_txt).getDate()}
                                  {
                                    monthNames[
                                      new Date(forecast?.dt_txt).getUTCMonth()
                                    ]
                                  }
                                </p>

                                <p className="text-right">
                                  {
                                    weekDayNames[
                                      new Date(forecast?.dt_txt).getUTCDay()
                                    ]
                                  }
                                </p>
                              </li>
                            </div>
                          )
                      )}
                    </ul>
                  </div>
                </section>
              </div>
              {/* right conatiner data */}
              <div className="felx bg-gray-800 rounded-3xl p-9 w-full overflow-x-auto">
                <section aria-labelledby="highlights-label" data-highlights>
                  <div>
                    <h2 className="text-2xl mb-4"> Todays Highlights</h2>
                    <div className="gird-info">
                      {/* air quality index card */}
                      <div className="grid_air flex flex-col justify-around">
                        <header className="flex justify-between align-middle mb-4">
                        <h3 className="font-bold text-base text-[#c8c8c7]">Air Quality Index</h3>
                        <span
                          className={`badge aqi-${watherReport?.airPolutionData.list[0].main.aqi} label-${watherReport?.airPolutionData.list[0].main.aqi}`}
                          title={
                            aqiText[
                              watherReport?.airPolutionData.list[0].main.aqi
                            ].message
                          }
                        >
                          {
                            aqiText[
                              watherReport?.airPolutionData.list[0].main.aqi
                            ].level
                          }
                        </span>
                        </header>
                        <div className="flex justify-between">
                          <span className="w-full m-icon mr-2">air</span>
                          <ul className="w-full flex justify-between align-middle">
                            <li>
                            <p>
                                PM<sub>2.5</sub>
                              </p>
                              <p>
                                {watherReport?.airPolutionData.list[0].components[
                                  "pm2_5"
                                ].toPrecision(3)}
                              </p>
                            </li>
                            <li> 
                            <p>
                                SO<sub>2</sub>
                              </p>
                              <p>
                                {watherReport?.airPolutionData.list[0].components[
                                  "so2"
                                ].toPrecision(3)}
                              </p>
                            </li>

                            <li>
                            <p>
                                NO<sub>2</sub>
                              </p>
                              <p>
                                {watherReport?.airPolutionData.list[0].components[
                                  "no2"
                                ].toPrecision(3)}
                              </p>
                            </li>

                            <li>
                            <p>
                                O<sub>3</sub>
                              </p>
                              <p>
                                {watherReport?.airPolutionData.list[0].components[
                                  "o3"
                                ].toPrecision(3)}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Sunrise & Sunset card */}
                      <div className="grid_sun_rice">
                        <h3 className="font-bold text-base text-[#c8c8c7] mb-4">Sunrise & Sunset</h3>
                        <div className="flex justify-between">
                          <div>
                            <span className="m-icon">clear_day</span>
                            <div>
                              <p>Sunrise</p>
                              <p>
                                {getTime(
                                  watherReport?.currentReport.sys.sunrise,
                                  watherReport?.currentReport.timezone
                                )}
                              </p>
                            </div>
                          </div>

                          <div>
                            <span className="m-icon">clear_night</span>
                            <div>
                              <p>Sunset</p>
                              <p>
                                {getTime(
                                  watherReport?.currentReport.sys.sunset,
                                  watherReport?.currentReport.timezone
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Humidity card */}
                      <div className="gird_humidity">
                        <h3 className="font-bold text-base text-[#c8c8c7] mb-4">Humidity</h3>
                        <div className="flex justify-between items-center">
                          <span className="m-icon">humidity_percentage</span>
                          <p>
                            {watherReport?.currentReport.main.humidity}
                            <sub>%</sub>
                          </p>
                        </div>
                      </div>
                      {/* Pressure card*/}
                      <div className="grid_pressure">
                        <h3 className="mb-4 font-bold text-base text-[#f1f1f0]">Pressure</h3>

                        <div className="flex justify-between items-center">
                          <span className="m-icon">airwave</span>
                          <p>
                            {watherReport?.currentReport.main.pressure}
                            <sub>hPa</sub>
                          </p>
                        </div>
                      </div>
                      {/* Visibility card*/}
                      <div className="grid_visibility">
                        <h3 className=" mb-4 font-bold text-base text-[#f1f1f0]">Visibility</h3>
                        <div className="flex justify-between items-center">
                          <span className="m-icon">visibility</span>

                          <p>
                            {watherReport?.currentReport.visibility / 1000}
                            <sub>km</sub>
                          </p>
                        </div>
                      </div>
                      {/* Feels Like card */}
                      <div className="grid_feels">
                        <h3 className="mb-4 font-bold text-base text-[#f1f1f0]">Feels Like</h3>
                        <div className="flex justify-between items-center">
                          <span className="m-icon">thermostat</span>
                          <p>
                            {parseInt(
                              watherReport?.currentReport.main.feels_like
                            )}
                            &deg;<sup>c</sup>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Today at */}
                <section aria-label="hourly forecast">
                  <h2 className="text-2xl my-4 font-bold">Today at</h2>
                  <div>
                    <ul className="flex justify-between align-middle gap-3">
                      {watherReport?.forecastData.list
                        .slice(0, 8)
                        .map((data: any) => {
                          return (
                            <li key={data.dt} className="rounded-lg bg-[#364457] p-4" >
                              <div className="flex flex-col gpa-8 items-center">
                                <p>{getHours(data.dt, data.timezone)}</p>
                                <img
                                  src={getWatherIcon(data.weather[0].icon)}
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  alt={data.weather[0].description}
                                  className="weather-icon"
                                  title={data.weather[0].description}
                                />

                                <p>{parseInt(data.main.temp)}&deg;</p>
                              </div>
                            </li>
                          );
                        })}
                    </ul>

                    <ul className="mt-4 flex justify-between align-middle gap-3">
                      {watherReport?.forecastData.list
                        .slice(0, 8)
                        .map((data: any) => {
                          return (
                            <li key={data.dt} className="rounded-lg bg-[#364457] p-4">
                              <div  className="flex flex-col gpa-8 items-center">
                                <p>{getHours(data.dt, data.timezone)}</p>
                                <img
                                  src={getWatherIcon("direction")}
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  alt="direction"
                                  className="weather-icon"
                                  style={{
                                    transform: `rotate(${
                                      data.wind.deg - 180
                                    }deg)`,
                                  }}
                                  title={data.weather[0].description}
                                />

                                <p>{parseInt(data.main.temp)}&deg;</p>
                              </div>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </section>
              </div>
            </article>
          </main>
        </Content>
      </Layout>:<Loading />}
    </>
  );
};

export default WatherReport;
