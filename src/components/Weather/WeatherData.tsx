import React from 'react'
import { StyledWeatherDataList, StyledWeatherCard } from 'styles/components/StyledWeatherData'
import Loader from 'components/Loader'
import { CurrentWeatherForecast } from 'interfaces/Weather'

interface IProps {
  weather: CurrentWeatherForecast | null
  isFetching: boolean
  error: string | null
}

const WeatherData:React.FC<IProps> = ({ weather, isFetching, error }) => {
  if (weather) {
    return (
      <StyledWeatherDataList data-testid="weather-data-list">
        <StyledWeatherCard>
          <h2 data-testid="weather-data-temperature-heading">
            TEMPERATURE
          </h2>
          <h3 data-testid="weather-data-temperature-value-heading">
            {`${weather.temp}°C`}
          </h3>
        </StyledWeatherCard>
        <StyledWeatherCard>
          <h2 data-testid="weather-data-humidity-heading">
            HUMIDITY
          </h2>
          <h3 data-testid="weather-data-humidity-value-heading">
            {`${weather.humidity}%`}
          </h3>
        </StyledWeatherCard>
        <StyledWeatherCard>
          <h2 data-testid="weather-data-pressure-heading">
            PRESSURE
          </h2>
          <h3 data-testid="weather-data-pressure-value-heading">
            {`${weather.pressure} hPa`}
          </h3>
        </StyledWeatherCard>
      </StyledWeatherDataList>
    )
  }

  if (isFetching) {
    return (
      <div
        data-testid="weather-data-loader"
        className="d-flex justify-content-center"
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <h2
        data-testid="weather-data-error-heading"
        className="text-center"
      >
        {error}
      </h2>
    )
  }

  return null
}

export default WeatherData
