import api from 'api'
import axios from 'axios'
import { currentLondonWeather } from 'api/__mocks__/index'

jest.mock('axios')

describe('api', () => {
  it('fetches the current weather of a city', async () => {
    (axios.get as jest.Mock).mockResolvedValue(currentLondonWeather)

    const response = await api.fetchCurrentWeatherForCity('London')
    expect(response).toEqual(currentLondonWeather)
  })
})
