import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";




function drawTemp() {
  let weather = appState.activeWeather
  setHTML('temp', appState.activeWeather.fahrenheit)
  console.log('Here is the temp', weather);
}


export class WeatherController {
  constructor() {
    this.getTemp()
    appState.on('activeWeather', drawTemp)
  }



  async getTemp() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('get temp', error)
      Pop.error(error)
    }
  }
}