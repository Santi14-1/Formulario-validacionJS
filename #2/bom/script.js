const clickMe = () => {
    const height = window.innerHeight
    const width = window.innerWidth
    open('https://google.com', 'Chrome') //abre url
    //window.history //guarda el historial

}


const historyBack = () => history.back()

document.getElementById('screenAlto').innerHTML = screen.height
document.getElementById('screenAncho').innerHTML = screen.width
document.getElementById('url').innerHTML = location.href
document.getElementById('btnAtras').addEventListener('click', historyBack)

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No'
document.getElementById('so').innerHTML = navigator.platform

//document.cookie = 'userName=Santi'

const user = document.cookie

confirm(`Este es tu usuario? ${user}`)