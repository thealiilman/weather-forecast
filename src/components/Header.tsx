import React from 'react'
import { StyledHeader } from 'styles/components/StyledHeader'

const Header = () => (
  <StyledHeader data-testid="header" className="text-center text-md-left">
    <h1
      data-testid="name-of-app-heading-in-header"
      className="d-inline-block"
    >
      Weather Forecast
    </h1>
  </StyledHeader>
)

export default Header
