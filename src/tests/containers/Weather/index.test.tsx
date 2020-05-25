import React from 'react'
import { render } from '@testing-library/react'
import Weather from 'containers/Weather'

describe('Weather', () => {
  it('renders successfully', () => {
    const { getByTestId } = render(<Weather />)

    const paragraphElement = getByTestId('search-for-forecast-paragraph')
    expect(paragraphElement).toHaveTextContent(
      'Search for the current weather forecast of a city.'
    )
    expect(paragraphElement).toHaveClass('text-center text-md-left')
  })
})
