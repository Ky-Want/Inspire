import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"




class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = []
  activeList = null
  // lists = loadState('lists', List)



  /** @type {import('./Models/Task').Task[]} */
  tasks = []
  activeTask = null

  // tasks = loadState('tasks', Task)
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
