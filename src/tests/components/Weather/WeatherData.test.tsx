import React from 'react'
import { render } from '@testing-library/react'
import { WeatherData } from 'components/Weather'

const weather = {
  temp: 10,
  humidity: 90,
  pressure: 1032,
}

describe('WeatherData', () => {
  it('displays weather data when data is given', () => {
    const { getByTestId } = render(
      <WeatherData weather={weather} isFetching={false} error={null} />
    )

    const weatherCardListElement = getByTestId(
      'weather-data-list'
    )
    expect(weatherCardListElement).toHaveStyle(`
      display: grid;
      list-style: none;
      margin-bottom: 0;
    `)
    expect(weatherCardListElement).toHaveStyleRule(
      'row-gap',
      '2rem',
      {
        media: 'only screen and (max-width: 767.98px)',
      },
    )
    expect(weatherCardListElement).toHaveStyleRule(
      'grid-template-columns',
      'repeat(3,1fr)',
      {
        media: 'only screen and (min-width: 768px)',
      },
    )
    expect(weatherCardListElement).toHaveStyleRule(
      'column-gap',
      '1rem',
      {
        media: 'only screen and (min-width: 768px) and (max-width: 991.98px)',
      },
    )
    expect(weatherCardListElement).toHaveStyleRule(
      'column-gap',
      '2rem',
      {
        media: 'only screen and (min-width: 992px)',
      },
    )

    const temperatureHeadingElement = getByTestId(
      'weather-data-temperature-heading'
    )
    expect(temperatureHeadingElement).toHaveTextContent('TEMPERATURE')

    const temperatureValueHeadingElement = getByTestId(
      'weather-data-temperature-value-heading'
    )
    expect(temperatureValueHeadingElement).toHaveTextContent(
      `${weather.temp}°C`
    )

    const humidityHeadingElement = getByTestId(
      'weather-data-humidity-heading'
    )
    expect(humidityHeadingElement).toHaveTextContent('HUMIDITY')

    const humidityValueHeadingElement = getByTestId(
      'weather-data-humidity-value-heading'
    )
    expect(humidityValueHeadingElement).toHaveTextContent(
      `${weather.humidity}%`
    )

    const pressureHeadingElement = getByTestId(
      'weather-data-pressure-heading'
    )
    expect(pressureHeadingElement).toHaveTextContent('PRESSURE')

    const pressureValueHeadingElement = getByTestId(
      'weather-data-pressure-value-heading'
    )
    expect(pressureValueHeadingElement).toHaveTextContent(
      `${weather.pressure} hPa`
    );

    [
      temperatureHeadingElement,
      humidityHeadingElement,
      pressureHeadingElement,
    ].forEach(headingElement => (
      expect(headingElement).toHaveStyle(`
        letter-spacing: .25rem;
        font-size: 1.6rem;
        font-weight: 700;
      `)
    ));

    [
      temperatureValueHeadingElement,
      humidityValueHeadingElement,
      pressureValueHeadingElement,
    ].forEach(headingElement => (
      expect(headingElement).toHaveStyle(`
        font-size: 2.4rem;
        font-weight: 400;
      `)
    ))
  })

  it('displays loader if data is being fetched', () => {
    const { getByTestId } = render(
      <WeatherData weather={null} isFetching error={null} />
    )

    const loader = getByTestId('weather-data-loader')
    expect(loader).toBeVisible()
  })

  it('displays error if error is given', () => {
    const error = 'An error has occurred! ❌'
    const { getByTestId } = render(
      <WeatherData weather={null} isFetching={false} error={error} />
    )

    const errorHeading = getByTestId('weather-data-error-heading')
    expect(errorHeading).toHaveTextContent(error)
    expect(errorHeading).toHaveClass('text-center')
  })

  it('displays nothing if no data is given', () => {
    const { container } = render(
      <WeatherData weather={null} isFetching={false} error={null} />
    )
    expect(container).toBeEmpty()
  })
})
