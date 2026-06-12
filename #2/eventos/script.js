//funcion declarativa
/*
function changeThisElement(element) {
    element.innerHTML = "Texto cambiado funcion declarativa";
}
*/
//funcion arrow

//const changeThisElement = element => element.innerHTML = "Texto cambiado funcion arrow"

const displayDate = () => document.getElementById("test").innerHTML = Date(); //funcion arrow con mas de una linea de codigo

document.getElementById('btn').onclick = displayDate; //no abro y cierro parentesis porque quiero que se ejecute cuando se haga click

const checkCookies = () => {
    let text = navigator.cookieEnabled ? "Cookies habilitadas" : "Cookies deshabilitadas";
    document.getElementById('test').innerHTML = text;
}

const upperCase = () => {
    const input = document.getElementById('name');
    input.value = input.value.toUpperCase();
}

const mouseOver = element => {
    element.innerHTML = "Estas sobre el div"
}

const mouseOut = element => {
    element.innerHTML = "Saliste del div"
}