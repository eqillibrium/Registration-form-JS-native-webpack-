import {DATA} from '../data.js'
export default function(){
    let switcher = true;
    for (let key in DATA){
        if(DATA[key] == false){
            switcher = false;
        }
    }
    console.log(switcher)
    return switcher;
}