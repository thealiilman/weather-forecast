import React, { useState, useEffect, FormEvent } from 'react'
import { WeatherSearch, WeatherData } from 'components/Weather'
import { useFetchCurrentWeather } from 'hooks/Weather'
import { CurrentWeatherForecast } from 'interfaces/Weather'
import { countries } from 'countries-list'

const Weather = () => {
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [
    { data, isFetching, error },
    fetchCurrentWeather,
  ] = useFetchCurrentWeather()

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const cityParam = queryParams.get('city')
    const countryParam = queryParams.get('country')

    // The argument `Object.prototype.hasOwnProperty` accepts
    // needs to be of type string, number or symbol.
    // This is rather undesirable for me considering the fact that
    // in console, passing `null` doesn't throw any error.
    // It merely returns false. I'm setting `countryParam` as
    // string here to go against TypeScript.
    const isCountryValid = Object.prototype.hasOwnProperty.call(
      countries,
      countryParam as string
    )

    if (cityParam && countryParam && isCountryValid) {
      setCity(cityParam)
      setCountry(countryParam)
      fetchCurrentWeather(cityParam, countryParam)
    }
  }, [])

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
        city={city}
        country={country}
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
