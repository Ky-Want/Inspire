import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"



function drawClock() {
  let template = ''
  appState.clock.forEach(c => template += c.ClockTemplate)
  setHTML('clock', template)
}


export class ClocksControllers {
  constructor() {
    appState.on('clock', drawClock)
    console.log('hello from clocks controller')
  }
}