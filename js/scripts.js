//querySelector

const heading = document.querySelector('h2'); // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

//querySelectorAll
const enlace = document.querySelectorAll('.navegacion a'); // 0 o todos los elementos
enlace[0].textContent = 'Nuevo Texto para enlace';
enlace[0].classList.add('nueva-clase');
// enlace[0].classList.remove('navegacion__enlace');

//getElementById

//Generar un enlace
const nuevoEnlace = document.createElement('A');

//Agregar el Href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar el Texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar el clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// Eventos
console.log(1);

window.addEventListener('load', function() { //load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
})

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Solo espera por el HTML, pero no espera CSS o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function(e) {
    console.log('e');
}

// Seleccionar elementos y asociarles un Evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); //No recarga la pagina

//     // Validar un formulario

//     console.log('Enviando Formulario');
// })


// Eventos en los inputs y TextArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//ELemento de Submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    //Validar el formulario
    const { nombre, email, mensaje } = datos;
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if (nombre == '' || email == '' || mensaje == '') {

        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //Corta la ejecucion del codigo
    }

    // Alerta de Enviar Correctamente
    mostrarAlerta('La operación se ha enviado exitosamente');

    //Enviar el formulario

    console.log('Enviando fomulario');
});

function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;
    console.log(datos);

};

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);


}