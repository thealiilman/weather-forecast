import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    --minty-green: #0be881; // SE Palette
    --black-pearl: #1e272e; // SE Palette
    --lynx-white: #f5f6fa; // GB Palette
    --white: white;
  }

  /* Default Element Styling */
  body {
    font-family: 'Jost', sans-serif;
    box-sizing: border-box;
    background-color: var(--lynx-white);
    color: var(--black-pearl);
    min-height: 100vh;
  }

  @media only screen and (max-width: 767.98px) {
    body {
      padding: 1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991.98px) {
    body {
      padding: 1.5rem 4rem;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
    body {
      padding: 2rem 5rem;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1919.98px) {
    body {
      padding: 3rem 6rem;
    }
  }

  @media only screen and (min-width: 1920px) {
    body {
      padding: 4rem 16rem;
    }
  }
`
