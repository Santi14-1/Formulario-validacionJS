const submitFunction =(event) => {
    event.preventDefault()  //previene actualizacion de la web
    const valido = validarFormulario();
}

document.getElementById('formulario').addEventListener('submit', submitFunction)  //escucha envio del formulario


function validarFormulario(){
    //validacion campos texto
    let camposTexto = document.querySelectorAll('input[type="text"]');

    let validacionCorrecta =true;

    camposTexto.forEach(campo => {
        const errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) //error + id con la primera mayuscula
        if(campo.value.length === 0){
            mostrarError(errorCampo,'Este campo es requerido');
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres')
        }else {
            ocultarError(errorCampo)
        }

    })

        //validacion email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { //valida formato email
        ocultarError(errorEmail)
    }else {
        mostrarError(errorEmail,'Ingrese un mail valido!')
        validacionCorrecta = false;
    }

        //validacion edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if(edad.value < 18){
        mostrarError(errorEdad,'Debes ser mayor!')
        validacionCorrecta = false;
    }else {
        ocultarError(errorEdad)
    }

    //validacion actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if(actividad.value == ''){
        mostrarError(errorActividad,'Selecciona una actividad')
        validacionCorrecta = false;
    }else {
        ocultarError(errorActividad)
    }


    //validar estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio,'Selecciona un nivel')
        validacionCorrecta = false;
    }else {
        ocultarError(errorNivelEstudio)
    }


    //validar terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const ErrorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(ErrorAceptoTerminos,'Debes aceptar los TyC!')
        validacionCorrecta = false
    }else{
        ocultarError(ErrorAceptoTerminos)
    }

    return validacionCorrecta


}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}




