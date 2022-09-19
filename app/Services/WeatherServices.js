// FIXME go and hit your endpoint to get the weather data. Store it in your AppState and that should get the API Data requirement

import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxServer } from "./AxiosServices.js";



class WeatherService {
  async flipWeatherCard(id) {
    const res = await SandboxServer.get('api/weather')
    appState.activeWeather = new Weather(res.data)


    // console.log('get weather', res.data);
  }




  setActiveWeather(id) {
    const cel = appState.weather.find(w => w.isFahrenheit == id)
    if (!cel) {
      appState.activeWeather = cel.fahrenheit
    }
  }
}


export const weatherService = new WeatherService()