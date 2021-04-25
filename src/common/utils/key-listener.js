import keys from '../constants/key-map.js';

export default class ListenKeys {
    constructor() {
      this.keys = {};
      this.listenKeys();
    }
  
    on(key, callback) {
      if (this.keys[key]) {
        callback();
      } else {
        return false;
      }
    }
  
    listenKeys() {
      const keysPressed = e => {
        this.keys[keys[e.keyCode]] = true;
      };
  
      const keysReleased = e => {
        this.keys[keys[e.keyCode]] = false;
      };
  
      window.onkeydown = keysPressed;
      window.onkeyup = keysReleased;
      console.log(this.keys)
    }

    getPressed(keyCode) {
      return this.keys[keyCode]
    }    
  }