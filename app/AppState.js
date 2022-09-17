import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"




class AppState extends EventEmitter {
  /** @type {import('./Models/Task').Task[]} */
  tasks = []
  activeTask = null


  /** @type {import('./Models/Clock').Clock[]} */
  clock = []



  /**@type {import('./Models/Quote').Quote[]} */
  quotes = []
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
