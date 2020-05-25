import { useReducer } from 'react'
import api from 'api'

interface CurrentWeatherState {
  data: object | null
  isFetching: boolean
  error: string | null
}

interface Action {
  type: string
  payload?: string | object | boolean
}

const initialState: CurrentWeatherState = {
  data: null,
  isFetching: false,
  error: null,
}

const reducer = (_state: any, action: Action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_WEATHER':
      return {
        data: null,
        isFetching: true,
        error: null
      }
    case 'FETCH_CURRENT_WEATHER_SUCCESS':
      return {
        data: action.payload,
        isFetching: false,
        error: null,
      }
    case 'FETCH_CURRENT_WEATHER_FAIL':
      return {
        data: null,
        isFetching: false,
        error: action.payload,
      }
    default:
      return initialState
  }
}

const useFetchCurrentWeather = () => {
  const [currentWeather, fetchCurrentWeather] = useReducer(reducer, initialState)

  const fetchData = async (city: string, country: string) => {
    fetchCurrentWeather({ type: 'FETCH_CURRENT_WEATHER' })

    try {
      const response = await api.fetchCurrentWeatherForCity(`${city},${country}`)
      fetchCurrentWeather({
        type: 'FETCH_CURRENT_WEATHER_SUCCESS',
        payload: response.data.main,
      })
    } catch (error) {
      let errorMessage = 'An error has occurred! ❌'
      if (error?.response?.data?.message) {
        const { response: { data: { message } } } = error
        errorMessage = `${message[0].toUpperCase()}${message.slice(1)}`
      }

      console.error(errorMessage)
      fetchCurrentWeather({
        type: 'FETCH_CURRENT_WEATHER_FAIL',
        payload: errorMessage,
      })
    }
  }

  return [currentWeather, fetchData] as const
}

export default useFetchCurrentWeather
