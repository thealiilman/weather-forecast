import React from 'react'
import StyledFooter from 'styles/components/StyledFooter'

const Footer = () => (
  <StyledFooter data-testid="footer">
    <p data-testid="footer-paragraph" className="m-0 text-center">
      Made by <a href="https://ali-ilman.com" target="_blank" rel="noopener noreferrer">Ali Ilman</a>.
    </p>
  </StyledFooter>
)

export default Footer
