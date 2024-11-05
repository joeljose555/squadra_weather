# Weather GraphQL API

This application is a GraphQL API built with Node.js, Express. The API provides weather information based on geographical coordinates and a specific date.

## Features

- **GraphQL API**: Provides weather data through the `getWeather` query.
- **Express Server**: Serves the API on `http://localhost:4000/graphql`.

## Requirements

- Node.js (v12 or above)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/joeljose555/squadra_weather.git
cd squadra_weather
```

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

### 4. Run the Application

To start the server on port 4000:

```bash
npm start
```

The server will be running at `http://localhost:4000/graphql`.

## Usage

Once the server is running, you can access the GraphQL playground at `http://localhost:4000/getweather` and query the API:
Queries are attached in Postman Collection in email.
Please import the collection to postman to test the api's

### Available Scripts

- **Install Dependencies**: `npm install`
- **Start the Server**: `npm start`

## Notes

- This API uses OpenWeather’s `timemachine` endpoint, which provides historical weather data since 1970. However due to api rate limits issue have added validations for checking of a maximum of 31 days in past and future.
