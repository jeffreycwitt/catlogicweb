
const C = require('../node_modules/catlogicjs');

export default function MyWorker(args) {
  

  // we can't use relative urls within blob! 
  // use importScripts("http://localhost/smth_to_include.js")
  
      this.onmessage = (e) => {
          //const result = new C.PremiseCollection(e.data).inferredTruthsUnique()
          console.log('[WORKER] MSG FROM MAIN THREAD:', e.data)
  
           postMessage("Hi, main thread, I'm worker!");
  
      }
  }