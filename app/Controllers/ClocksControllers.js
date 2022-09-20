import { appState } from "../AppState.js"
import { clocksServices } from "../Services/ClocksServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js"



// FIXME you don't need to make any network requests here. Look into using a new Date() constructor to grab the current date. You will need to update the date every second. Call drawClock every second/
// FIXME https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date look into converting to a time string



function drawClock() {
  // let template = ''
  // appState.clock.forEach(c => template += c.ClockTemplate)
  // setHTML('clock', new Date())

  const event = new Date('August 19, 1975 23:15:30 GMT+00:00');

  setText('time', appState.activeClock.event.toLocaleTimeString('en-US'))

  console.log('time: ');
}


export class ClocksControllers {
  constructor() {
    this.getTime()
    appState.on('clock', drawClock)
    console.log('hello from clocks controller')
  }




  async getTime() {
    try {
      await clocksServices.getTime()
    } catch (error) {
      console.error('[get random image controller]', error);
      Pop.error(error.message)
    }
  }
}