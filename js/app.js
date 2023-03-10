const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.btn');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

document.addEventListener('DOMContentLoaded', iniciarApp)


function iniciarApp() {
console.log('hola')
    btnEnviar.classList.add('btn-desactivado');
    btnEnviar.disabled = true;

    nombre.addEventListener('blur', validarForm);
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);

  
}


function validarForm(e) {

    e.preventDefault();

    if(e.target.value === '') {
        e.target.classList.remove('succes');
        e.target.classList.add('error');
        e.target.attributes.placeholder.textContent = 'Este campo no puede ir vacio';
    } else {
        e.target.classList.remove('error');
        e.target.classList.add('succes');
    }

    if(nombre.value != '' && email.value != '', asunto.value != '', mensaje.value != '') {
        btnEnviar.classList.remove('btn-desactivado');
        btnEnviar.disabled = false;
    }
}