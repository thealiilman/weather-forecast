import React from 'react'
import { render } from '@testing-library/react'
import { WeatherSearch } from 'components/Weather'

describe('WeatherSearch', () => {
  it('renders successfully', () => {
    const { getByTestId, getByLabelText } = render(
      <WeatherSearch
        setCity={() => null}
        setCountry={() => null}
        onSubmit={() => null}
      />
    )

    const formElement = getByTestId('weather-search-form')
    expect(formElement).toBeVisible()
    expect(formElement).toHaveClass('d-flex')

    const cityNameInputElement = getByTestId('weather-search-city-input')
    expect(cityNameInputElement).toHaveAttribute('placeholder', 'Enter a city')
    expect(cityNameInputElement).toHaveAttribute('type', 'text')
    expect(cityNameInputElement).toHaveFocus()
    expect(cityNameInputElement).toHaveClass('border-0')
    expect(cityNameInputElement).toHaveStyleRule(
      'background-color',
      'var(--black-pearl)',
    )
    expect(cityNameInputElement).toHaveStyleRule('color', 'var(--white)')
    expect(cityNameInputElement).toHaveStyleRule(
      'color',
      'var(--lynx-white)',
      {
        modifier: '::placeholder',
      },
    )
    expect(cityNameInputElement).toHaveStyle(`
      border-radius: .5rem;
      padding: 1rem;
      outline: none;
    `)

    const countrySelectElement = getByLabelText('Option to select country')
    expect(countrySelectElement).toBeVisible()

    const submitButtonElement = getByTestId('weather-search-submit-button')
    expect(submitButtonElement).toBeVisible()
    expect(submitButtonElement).toHaveClass(
      'border-0 rounded py-1 px-2 align-self-center mt-4 mt-md-0 ml-md-4'
    )
    expect(submitButtonElement).toHaveStyleRule(
      'background-color',
      'var(--minty-green)',
    )
    expect(submitButtonElement).toHaveStyleRule('color', 'var(--black-pearl)')
    expect(submitButtonElement).toHaveStyle(`
      font-weight: 600;
      transition: transform .2s ease-in-out;
    `)
    expect(submitButtonElement).toHaveStyleRule(
      'transform',
      'translateY(-.25rem)',
      {
        modifier: ':hover',
      },
    )
  })
})
