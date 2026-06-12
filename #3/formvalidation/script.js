const doValidation = () => {
    const number = document.getElementById('number');

    document.getElementById('error').innerHTML = number.checkValidity() ? 'El numero es correcto' : number.validationMessage
}

const doValidation2 = () => {
    const name = document.getElementById('name');
    
    document.getElementById('error2').innerHTML = name.checkValidity() ? 'El nombre es correcto' : 'El nombre es requerdio debes completar este campo'
}


const gobackx2 = () => window.history.go(-2)
const goBack = () => window.history.back()
const goFrorward = () => window.history.forward()
const goForwardx2 = () => window.history.go(2)
