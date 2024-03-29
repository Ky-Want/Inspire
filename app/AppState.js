import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"




class AppState extends EventEmitter {
  /** @type {import('./Models/Task').Task[]} */
  tasks = []
  // activeTask = null


  /** @type {import('./Models/Clock').Clock[]} */
  clock = []
  activeClock = null



  /**@type {import('./Models/Quote').Quote[]} */
  quotes = []
  activeQuote = null



  /**@type {import('./Models/Image').Image []} */
  images = []
  activeImage = null



  /**@type {import('./Models/Weather').Weather []} */
  weather = []
  activeWeather = null
}







export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
