"use strict";

import {CONFIG} from './config.js';
import {DATA} from './data.js';

import setColoredStatus from './functions/setColoredStatus'
import unlockBtn from './functions/unlockBtn'

class Form{
    constructor(){}
    init(){
        let group = document.querySelectorAll(CONFIG.groupSelector);
        let dropField = document.querySelector(CONFIG.dropFieldSelector);
        let dropGroup = document.querySelectorAll(CONFIG.dropGroupSelector);
        let dropBlock = document.querySelector(CONFIG.dropBlockSelector);
        let checkbox = document.querySelector(CONFIG.checkbox);
        group.forEach(el => {
            el.addEventListener('keyup', (event) =>{
                if(event.target.id != 'language'){
                    this._checkReg(el);
                }
                if(event.target.parentNode.id != 'rel'){
                    dropBlock.style.display = 'none'
                }
            })
        })
        dropGroup.forEach(el => {
            el.addEventListener('click', (event) => {
                dropField.value = el.dataset.value;
                dropBlock.style.display = 'none'   
                this._setTrueData(dropField.value, dropField.id)
                unlockBtn()     
            })
        })
        dropField.addEventListener('click', () =>{
            dropBlock.style.display = 'block'
        })
        checkbox.addEventListener('click', () => {
            unlockBtn()
        })

    }
    _checkReg(el){
        switch(el.id){
            case 'name': this._setStatus(CONFIG.nameReg.test((el.value).toLowerCase()), el.value, el.id); return;
            case 'email': this._setStatus(CONFIG.emailReg.test(el.value), el.value, el.id); return;
            case 'phone': this._setStatus(CONFIG.phoneReg.test(el.value), el.value, el.id); return;
        }
    }
    _setStatus(condition, value, selector){
        if(condition){
            this._setTrueData(value, selector);
        } else if (!condition){
            this._setFalseData(selector);
        }
        setColoredStatus(condition, value, selector);
        unlockBtn()
    }
    
    _setTrueData(value, selector){
        switch(selector){
            case 'name': return DATA.name = value;
            case 'email': return DATA.email = value;
            case 'phone': return DATA.phone = value;
            case 'language': return DATA.language = value;
        }
    }

    _setFalseData(selector){
        switch(selector){
            case 'name': return DATA.name = false;
            case 'email': return DATA.email = false;
            case 'phone': return DATA.phone = false;
        }
    }
}

export { Form }





