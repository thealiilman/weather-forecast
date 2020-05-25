import React, { useState, FormEvent } from 'react'
import { WeatherSearch, WeatherData } from 'components/Weather'
import { useFetchCurrentWeather } from 'hooks/Weather'
import { CurrentWeatherForecast } from 'interfaces/Weather'

const Weather = () => {
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [
    { data, isFetching, error },
    fetchCurrentWeather,
  ] = useFetchCurrentWeather()

  const onSubmitWeatherSearch = async (event: FormEvent) => {
    event.preventDefault()
    await fetchCurrentWeather(city, country)
  }

  return (
    <>
      <p
        data-testid="search-for-forecast-paragraph"
        className="text-center text-md-left"
      >
        Search for the current weather forecast of a city.
      </p>
      <WeatherSearch
        setCity={setCity}
        setCountry={setCountry}
        onSubmit={onSubmitWeatherSearch}
      />
      <div className="mt-5">
        <WeatherData
          weather={data as CurrentWeatherForecast}
          isFetching={isFetching}
          error={error as string | null}
        />
      </div>
    </>
  )
}

export default Weather
