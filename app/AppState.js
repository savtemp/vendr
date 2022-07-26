import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  
  /** @type {import("./Models/Snack.js").Snack[]} */
  snacks = [
    new Snack('https://images.unsplash.com/photo-1566496875470-68ada46a38c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60)','Mountain Sprite', 2.50),
    new Snack('https://images.unsplash.com/photo-1566496875470-68ada46a38c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60','Root Dew', 5.75)
  ]
  
}










export const ProxyState = new Proxy(new AppState(), {
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
