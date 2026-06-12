const paragraph = document.createElement('p') //creando un nodo de parrafo
const node = document.createTextNode('Nuevo contenidodwedwdwdw')//creamos elementos de texto
paragraph.appendChild(node) //incorporo elemento de texto al nodo de parrafo

const container = document.getElementById('div1') //en container esta el div
const p1 = document.getElementById('p1')  //insercion antes de un elemento antes q otro
container.insertBefore(paragraph,p1)//insercion antes de un elemento antes q otro
//container.appendChild(paragraph)

//const p2 = document.getElementById('p2')//remover algo
//p2.remove()

container.removeChild(p1) //remover algo

const p3 = document.getElementById('p3')
container.replaceChild(paragraph, p3)