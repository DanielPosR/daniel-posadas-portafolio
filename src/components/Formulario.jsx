import { useState } from 'react';
import styles from '/styles/contacto.module.css';

import { useForm } from '@formspree/react';
import { Navigate } from 'react-router-dom';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xrgwqwzw");

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [redirect, setRedirect] = useState(false);

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


    // function manejarEnvio(e) {
    //     e.preventDefault()

    //     setTimeout(() => {
    //         setNombre('');
    //         setEmail('');
    //         setAsunto('');
    //         setMensaje('');

    //         setMensajeEnviado('');
    //     }, 3000);
    // }

    function redireccionar (valor) {

        if(state.succeeded) {

            setTimeout(() => {
                setRedirect(valor)
            }, 2500);

            return;
        }
    }

    return (
        <form
            className={styles.formulario}
            onSubmit={handleSubmit}
        >

            <fieldset>
                <legend>Enviar mensaje</legend>

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

            </fieldset>

            <div className={styles.botones}>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className='btn'
                > Enviar </button>

            </div>

            {state.succeeded && (
                <>
                    <div className='alertaEnviado'>Enviado. redireccionando...</div>
                    {redireccionar(true)}

                </>

            )}
            {redirect ? <Navigate to={'/'} /> : null}

        </form>
    )
}

function Formulario() {

    return (
        <ContactForm />
    )
}


export default Formulario;