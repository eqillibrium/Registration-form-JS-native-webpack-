import {CONFIG} from '../config.js'
import {DATA} from '../data.js'

export default async function(){
    await fetch(CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(DATA)
      })
}