import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"

// FIXME you don't need to make any network requests here. Look into using a new Date() constructor to grab the current date. You will need to update the date every second. Call drawClock every second/
// FIXME https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date look into converting to a timestring

function drawClock() {
  let template = ''
  appState.clock.forEach(c => template += c.ClockTemplate)
  setHTML('clock', new Date())
}


export class ClocksControllers {
  constructor() {
    appState.on('clock', drawClock)
    console.log('hello from clocks controller')
  }
}