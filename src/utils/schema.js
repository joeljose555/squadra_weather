export async function getSchema() {
    return `
        type Query {
        currentWeather(city: String): Weather
        weatherBetweenDates(city: String!, start: String!, end: String!): [Weather]
        }
    
        type Weather {
        date: String
        temperature: Float
        description: String
        humidity: Int
        windSpeed: Float
        }
    `
} 