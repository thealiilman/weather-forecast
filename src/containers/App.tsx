import React from 'react'
import Header from 'components/Header'
import Weather from './Weather'
import { GlobalStyle } from 'styles/GlobalStyle'
import Footer from 'components/Footer'

const App = () => (
  <main className="d-flex flex-column">
    <Header />
    <section className="my-5">
      <Weather />
    </section>
    <div className="mt-auto">
      <Footer />
    </div>
    <GlobalStyle />
  </main>
)

export default App
