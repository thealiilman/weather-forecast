import React from 'react'
import Header from 'components/Header'
import { render } from '@testing-library/react'

describe('Header', () => {
  it('renders successfully', () => {
    const { getByTestId } = render(<Header />)

    const headerElement = getByTestId('header')
    expect(headerElement).toHaveClass('text-center text-md-left')

    const headingElement = getByTestId('name-of-app-heading-in-header')
    expect(headingElement).toHaveTextContent('Weather Forecast')
    expect(headingElement).toHaveClass('d-inline-block')
    expect(headingElement).toHaveStyle(`
      border-bottom: 4px solid var(--minty-green);
    `)
  })
})
