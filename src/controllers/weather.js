import axios from "axios"
import City from "../models/cities.js"
import { getTimestamps } from "../utils/utils.js"
import moment from "moment"
export const fetchCurrentWeather = async (city) => {
    try {
        const cityData = await City.findOne(
            { city: city.trim().toLowerCase() },
            { latitude: 1, longitude: 1 }
        );

        if(!cityData) throw new Error("Invalid city entered")
        let  { latitude, longitude } = cityData
        let timeStamp = Math.floor(Date.now() / 1000);
        const url = `${process.env.BASE_URL}?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&dt=${timeStamp}&appid=${process.env.API_KEY}`;

        let data = (await axios.get(url)).data;
        data = data.data[0]
        if (data) {
            return {
                date: moment(data.dt *1000).format("DD-MM-YYYY,h:mm:ss a"),
                temperature: data.temp,
                description: data.weather[0].description,
                humidity: data.humidity,
                windSpeed: data.wind_speed,
            };
        }
        throw new Error("Unable to fetch weather data")
    } catch (error) {
        console.log(error)
        return error
    }
}

export const fetchWeatherBetweenDates = async (city, startDate, endDate) => {
    try {
        let dates = await getTimestamps(startDate, endDate)
        if(dates.length > 31) throw new Error("Maximum Date range should be less than or equal to 31")
        const cityData = await City.findOne(
            { city: city.trim().toLowerCase() },
            { latitude: 1, longitude: 1 }
        );

        if(!cityData) throw new Error("Invalid city entered")
        let  { latitude, longitude } = cityData
        const weatherData = await Promise.all(
            dates.map(async (date) => {
                const url = `${process.env.BASE_URL}?lat=${parseFloat(latitude)}&lon=${parseFloat(longitude)}&dt=${date}&appid=${process.env.API_KEY}`;

                const response = await axios.get(url);
                let data = response.data.data[0]
                if (data) {
                    return {
                        date: moment(data.dt *1000).format("DD-MM-YYYY,h:mm:ss a"),
                        temperature: data.temp,
                        description: data.weather[0].description,
                        humidity: data.humidity,
                        windSpeed: data.wind_speed,
                    };
                }
            })
        );
        return weatherData
    } catch (error) {
        console.log(error)
        return error
    }
}