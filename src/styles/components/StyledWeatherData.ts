import styled from 'styled-components'

export const StyledWeatherDataList = styled.ul`
  display: grid;
  list-style: none;
  margin-bottom: 0;

  @media only screen and (max-width: 767.98px) {
    row-gap: 2rem;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    column-gap: 1rem;
  }

  @media only screen and (min-width: 992px) {
    column-gap: 2rem;
  }
`

export const StyledWeatherCard = styled.li`
  background-color: var(--black-pearl);
  color: var(--white);
  padding: 1rem;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(51, 51, 51, .16);
  border-radius: .5rem;

  &:first-of-type {
    animation: fadeIn .5s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: fadeIn .75s ease-in-out;
  }

  &:last-of-type {
    animation: fadeIn 1s ease-in-out;
  }

  h2 {
    letter-spacing: .25rem;
    font-size: 1.6rem;
    font-weight: 700;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 400;
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    h2 {
      font-size: 1.4rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`
