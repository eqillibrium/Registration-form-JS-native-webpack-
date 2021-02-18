import {CONFIG} from '../config.js'

import postRequest from './postRequest'
import checkData from './checkData'

export default function(){
    let btn = document.querySelector('#btn');
    let checkbox = document.querySelector(CONFIG.checkbox);
    if(checkData() && checkbox.checked){
        console.log("unlock")
        btn.classList.remove('form__button_disabled');
        btn.classList.add('form__button');
        btn.removeAttribute('disabled');
        btn.addEventListener('click', postRequest);
    } else {
        console.log("lock")
        btn.classList.add('form__button_disabled');
        btn.classList.remove('form__button');
        btn.setAttribute('disabled', true);
        btn.removeEventListener('click', postRequest);
    }
}