import { AxiosPromise } from 'axios'
import axiosWithDefaults from './config'

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default {
  fetchCurrentWeatherForCity: (city: string): AxiosPromise => (
    axiosWithDefaults.get(
      `weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`,
    )
  )
}
