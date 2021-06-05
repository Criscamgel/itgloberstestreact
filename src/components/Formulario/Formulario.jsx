import './Formulario.scss';
import React, { useContext, useState } from 'react';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { FormContext } from '../../contexts/FormContext';

export const Formulario = () => {

    const { setDatos, setShowModal } = useContext(FormContext);
    const [msgError, setMsgError] = useState({
        nombre: "",
        email: "",
        celular: "",
        edad: ""
    });

    const [datosForm, handleInputChange, reset] = useForm({
        nombre: "",
        email: "",
        celular: "",
        edad: ""
    });

    const { nombre, email, celular, edad } = datosForm;

    const submitLogin = (e) => {
        e.preventDefault();
        validarCampos();
        validarCampos() && enviarDatos();
    }

    const enviarDatos = () => {

            setDatos(datosForm);
            setShowModal(true);
            console.log(datosForm);
            reset();
    }

    const validarCampos = () => {

        let mensajesError = {}

        mensajesError.nombre = validator.isEmpty(nombre) ? "El campo nombre debe estar diligenciado" : null;
        
        mensajesError.email = validator.isEmpty(email) ? "El campo email debe estar diligenciado" : null;
        if (!validator.isEmpty(email)){
            mensajesError.email = !validator.isEmail(email) ? "se ha diligenciado un email invalido" : null;
        }
        
        mensajesError.celular = validator.isEmpty(celular) ? "El campo celular debe estar diligenciado" : null;
        if (!validator.isEmpty(celular)){
            mensajesError.celular = !validator.isLength(celular.toString(),{min:10, max:10}) ? "El celular diligenciado es invalido, debe contener 10 números" : null;
        }
        
        mensajesError.edad = validator.isEmpty(edad) ? "El campo edad debe estar diligenciado" : null;
        if(!validator.isEmpty(edad)){
            mensajesError.edad = edad < 18 || edad > 100 ? "El campo edad esta fuera del rango permitido" : null;
        }

        setMsgError({
            ...mensajesError
        })

        return !Object.values(mensajesError).some(v => v);
    }

    return (
        <div className="Formulario">
            <form onSubmit={ submitLogin } noValidate>
                <label htmlFor="">Nombre Completo</label>
                <input 
                    type="text" 
                    name="nombre" 
                    value={ nombre } 
                    onChange={ handleInputChange } 
                    placeholder="Escribe tu nombre"
                    required/>
                <small>{msgError.nombre}</small>

                <label htmlFor="">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={ email } 
                    onChange={ handleInputChange } 
                    placeholder="Escribe tu Email"
                    required/>
                <small>{msgError.email}</small>

                <label htmlFor="">Celular</label>
                <input 
                    type="number" 
                    name="celular" 
                    value={ celular } 
                    onChange={ handleInputChange } 
                    placeholder="Escribe tu celular"
                    required/>
                <small>{msgError.celular}</small>

                <label htmlFor="">Edad</label>
                <input 
                    type="number" 
                    name="edad" 
                    value={ edad } 
                    onChange={ handleInputChange } 
                    placeholder="Escribe tu edad"
                    />
                <small>{msgError.edad}</small>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
