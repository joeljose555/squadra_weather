import { buildSchema } from 'graphql';
import {fetchCurrentWeather,fetchWeatherBetweenDates} from './controllers/weather.js'
import {getSchema} from "./utils/schema.js"

let queries = await getSchema()
export const schema = buildSchema(queries);

export const root = {
    currentWeather: ({ city  }) => fetchCurrentWeather(city),
    weatherBetweenDates:({city,start,end}) => fetchWeatherBetweenDates(city,start,end)
};
