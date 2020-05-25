# weather-forecast
Weather Forecast is a React application for viewing the current weather forecast of a city. It uses [OpenWeatherMap](https://openweathermap.org/) for the weather data.

## Tech Stack
It is hosted on Netlify.

### Front-End
1. React.js
2. TypeScript
3. React Testing Library (along with `jest-dom` and `user-event`)
4. HTML5
5. SCSS


## How To Setup
### Prerequisite
Please create a `.env.local` file with your OpenWeatherMap API key in order for the data to be fetched successfully.
```
REACT_APP_OPENWEATHERMAP_API_KEY=your_open_weather_map_api_key
```

### With Docker
These steps assume that you already have Docker and Docker Compose on your machine.
#### Steps
```sh
docker-compose build
docker-compose up
```

### Without Docker
Weather Forecast uses `yarn` for managing packages.
#### Steps
```sh
yarn install
yarn start
```
