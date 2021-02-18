export default function (condition, value, selector){
    let domElement = document.querySelector(`#${selector}`);
    let domElementHelp = document.querySelector(`#${selector}Help`);
    if(condition){
        domElement.classList.remove('is-invalid')
        domElement.classList.add('is-valid')
        domElementHelp.style.visibility = 'hidden';
    } else if(value == ''){
        domElement.classList.add('is-invalid')
        domElement.classList.remove('is-valid')
        domElementHelp.textContent = 'Поле обязательно к заполнению'
        domElementHelp.style.visibility = 'visible';
    } else {
        domElement.classList.add('is-invalid')
        domElement.classList.remove('is-valid')
        domElementHelp.textContent = 'Введено некорректное значение'
        domElementHelp.style.visibility = 'visible';
    }
}