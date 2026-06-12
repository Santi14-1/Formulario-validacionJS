const array = ["HTML", "CSS", "JavaScript", "Python", "Java"]; //array strings

const object = {  //objeto literal
    name: "John",
    age: 30,
    city: "New York"
};

const objetArray = [ //array objetos
    {materia: 'HTML', dificultad: 6, necesario: true},
    {materia: 'CSS', dificultad: 7, necesario: false},
    {materia: 'JS', dificultad: 4, necesario: false},
    {materia: 'REACT', dificultad: 6, necesario: true},
]

//document.getElementById("test").innerHTML = 'Hola mundo'

const saludos = document.querySelectorAll('p.saludo')

document.getElementById('test').innerHTML = 'Hola mundo del primer saludo: ' + saludos[0].innerHTML

const form = document.forms['form1'];
let text = '';
for (let i= 0 ; i < form.length; i++) {
    text += form.elements[i].value + '<br>';
}

document.getElementById('test').innerHTML = text;