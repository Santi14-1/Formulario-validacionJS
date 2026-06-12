//const keydown = ($event) => {
 //   const key = $event.key
//    console.log(key)
//}


let key 

const keydown = ($event) => {
    key = $event.getModifierState('CapsLock')
    console.log(key)
    document.getElementById('capsLock').innerHTML = key ? 'Mayuscula Activada' : ''
}