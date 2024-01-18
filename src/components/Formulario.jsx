import { useState, useEffect } from 'react';
import '../../styles/contacto.css';

import Swal from 'sweetalert2';


import { useForm } from '@formspree/react';

const ContactForm = () => {

    const [state, handleSubmit] = useForm("xrgwqwzw");

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (state.succeeded) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Mensaje Enviado",
                showConfirmButton: false,
                timer: 1500
            });
        }

        setNombre('');
        setEmail('');
        setAsunto('');
        setMensaje('');
    }, [state.succeeded]);

    function validarForm(e) {
        if (e.target.value === '') {
            e.target.placeholder = 'Este campo es obligatorio';
            e.target.className = 'error';
        } else {
            e.target.className = '';
        }
    }


    function validarEmail(e) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
            e.target.value = '';
            e.target.placeholder = 'Email inválido'
            e.target.className = 'error';
        } else {
            e.target.className = '';
        }
    }


    return (
        <form
            className='formulario'
            onSubmit={handleSubmit}
        >

            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder='Tu nombre'
                required
                value={nombre}
                onChange={(e) => {
                    setNombre(e.target.value)
                }}
                onBlur={(e) => validarForm(e)}
                minLength={3}
            />

            <label htmlFor="email">Email:</label>
            <input
                autoComplete='false'
                type="text"
                name="email"
                id="email"
                placeholder='Tu email'
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                onBlur={(e) => {
                    validarEmail(e)
                }}
            />

            <label htmlFor="asunto">Asunto:</label>
            <input
                type="text"
                name="asunto"
                id="asunto"
                placeholder='Asunto del mensaje'
                required
                value={asunto}
                onChange={(e) => {
                    setAsunto(e.target.value)
                }}
                onBlur={(e) => validarForm(e)}
                minLength={5}
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
                name="mensaje"
                id="mensaje"
                placeholder='Tu mensaje'
                value={mensaje}
                onChange={(e) => {
                    setMensaje(e.target.value)
                }}
                onBlur={(e) => validarForm(e)}
                minLength={10}
                required
            ></textarea>


            <button
                type="submit"
                disabled={state.submitting}
                className='btn'
            > Enviar
            </button>
        </form>
    )
}

function Formulario() {

    return (
        <ContactForm />
    )
}


export default Formulario;
