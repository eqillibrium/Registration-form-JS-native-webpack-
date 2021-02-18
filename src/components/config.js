const CONFIG = {
    dropFieldSelector: '#language',
    dropBlockSelector: '.abs',
    dropGroupSelector: '.form__list_option',
    groupSelector: 'input[type=text]',
    checkbox: '#agree',
    nameReg: /^[a-z]/,
    emailReg: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    phoneReg: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    url: 'http://localhost:3000/users'
}

export { CONFIG }