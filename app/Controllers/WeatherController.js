import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";




function drawTemp() {
  let weather = appState.activeWeather
  setHTML('temp', appState.activeWeather.temp)
  console.log('Here is the temp', weather);
}


export class WeatherController {
  constructor() {
    this.flipWeatherCard()
    appState.on('activeWeather', drawTemp)
  }



  async flipWeatherCard() {
    try {
      await weatherService.flipWeatherCard()
    } catch (error) {
      console.error('get temp', error)
      Pop.error(error)
    }
  }
}