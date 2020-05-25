import React from 'react'
import Header from 'components/Header'
import Weather from './Weather'
import { GlobalStyle } from 'styles/GlobalStyle'

const App = () => (
  <>
    <Header />
    <section className="mt-5">
      <Weather />
    </section>
    <GlobalStyle />
  </>
)

export default App
