import React from 'react'
import Footer from 'components/Footer'
import { render } from '@testing-library/react'

describe('Footer', () => {
  it('renders successfully', () => {
    const { getByTestId } = render(<Footer />)

    const footerElement = getByTestId('footer')
    expect(footerElement).toBeVisible()

    const paragraphElement = getByTestId('footer-paragraph')
    expect(paragraphElement).toHaveTextContent('Made by Ali Ilman')
    expect(paragraphElement).toHaveClass('m-0 text-center')
    const myWebsiteLinkElement = paragraphElement.children[0]
    expect(myWebsiteLinkElement).toHaveAttribute(
      'href',
      'https://ali-ilman.com'
    )
    expect(myWebsiteLinkElement).toHaveAttribute('target', '_blank')
    expect(myWebsiteLinkElement).toHaveAttribute('rel', 'noopener noreferrer')
  })
})