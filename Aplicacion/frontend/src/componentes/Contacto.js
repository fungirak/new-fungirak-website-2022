import React from 'react';
import { useState, useEffect } from 'react';
import M from 'materialize-css';
import './materialize/css/materialize.min.css';
import swal from 'sweetalert';
import Banda from './helpers/Banda';

import { FormControlLabel } from '@mui/material';
import { Checkbox } from "@mui/material";


const Contacto = () => {

    const [boolCompleto, setBoolCompleto] = useState(false);
    const [boolPoliticas, setBoolPoliticas] = useState(true);
    const [enviado, setEnviado] = useState(false);
    const [datos, setDatos] = useState({
        asunto: '',
        nombre: '',
        apellido: '',
        company: '',
        website: '',
        emisor: '',
        telefono: '',
        mensaje: ''
    })
    
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        });
        
    }
 
    useEffect(()=>{
      console.log(boolPoliticas);
      console.log(boolCompleto);
      if(datos.asunto && datos.nombre && datos.apellido && datos.emisor && datos.mensaje && boolPoliticas){
        setBoolCompleto(true);
      }
      return () => {
        // Cleanup function
        
    }
    },[datos, boolPoliticas, boolCompleto]);

    

    const enviarDatos = (e) => {
        e.preventDefault()
      
      fetch('https://link-de-heroku.com/', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(datos)
      })
        .then((data) => data.json(data))
        .then((data) => console.log(data))

        setEnviado(true);

        setDatos({
          asunto: '',
          nombre: '',
          apellido: '',
          company: '',
          website: '',
          emisor: '',
          telefono: '',
          mensaje: ''
        });

        setBoolCompleto(!boolCompleto);

        swal({
          title: "MENSAJE",
          text: "ENVIADO",
          icon: "success",
          buttons: false,
          timer: 1500,
        });

    }

    /*
    const handleToast = () => {
      M.toast({html: 'MENSAJE ENVIADO', classes: 'rounded bg-dark fs-5 fixed-top d-flex justify-content-center mx-auto' ,displayLength: 1500 }) ;
    }

    useEffect(()=>{
      M.CharacterCounter.init(document.querySelector('#mensaje'));
    },[])
    */
    
    const handlePoliticas = () => {
      setBoolPoliticas(!boolPoliticas);
    }

    

  return (
  <>
  <div className="container col-md-6  mb-5 mt-3 shadow-lg border border-3  rounded p-5">
  <h1 className="text-center mt-3  fw-normal p-2 shadow-lg rounded-pill">Contacto</h1>
    <div className="row">
      <form className="col s12 mt-5" onSubmit={enviarDatos}>

        <div className="row">
          <div className="input-field col s6">
            <input id="nombre" type="text"  maxLength="64"   pattern="[a-zA-ZñÑ ]{2,64}" className="validate ms-2" autoFocus required onChange={handleInputChange} name="nombre" value={datos.nombre} />
            <label htmlFor="nombre" className="fs-6">Nombre *</label>
          </div>

          <div className="input-field col s6">
            <input id="apellido" type="text"  maxLength="64"  pattern="[a-zA-ZñÑ ]{2,64}"  className="validate" required onChange={handleInputChange} name="apellido" value={datos.apellido}  />
            <label htmlFor="apellido" className="fs-6">Apellido *</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="asunto" type="text"  maxLength="64" className="validate ms-2" pattern="[a-zA-ZñÑ /.-_!¡¿?]{2,64}"  required onChange={handleInputChange} name="asunto" value={datos.asunto} />
            <label htmlFor="asunto" className="fs-6">Asunto *</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="mensaje" className="materialize-textarea ms-2"  pattern="[a-zA-Z0-9ñÑ ]{2,64}" maxLength="1000" required onChange={handleInputChange} name="mensaje" value={datos.mensaje} data-length="1000"></textarea>
            <label htmlFor="mensaje" className="fs-6">Mensaje *</label>
            <span className="helper-text" data-error="Inválido" data-success="Válido"> 1000 carácteres máximo</span>
          </div>
        </div>

       
        <div className="row">
          <div className="input-field col s6">
            <input id="emisor" type="email" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" maxLength="64" className="validate ms-2" required onChange={handleInputChange} name="emisor" value={datos.emisor}  />
            <label htmlFor="emisor" className="fs-6">Email *</label>
          </div>

          <div className="input-field col s6">
            <input id="telefono" type="number"   className="validate"  onChange={handleInputChange} name="telefono" value={datos.telefono} />
            <label htmlFor="telefono" className="fs-6">Teléfono (opcional)</label>
          </div>
        </div>
    

        <div className="row">
          <div className="input-field col s6">
            <input id="company" type="text"  pattern="[a-zA-Z0-9ñÑ.-_!¡¿?/ ]{2,64}" maxLength="64" className="validate ms-2" onChange={handleInputChange} name="company" value={datos.company} />
            <label htmlFor="company" className="fs-6">Compañía (opcional)</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="website" type="text" maxLength="256" pattern="[a-zA-Z0-9ñÑ./_-$']{3,256}" className="validate ms-2" onChange={handleInputChange} name="website" value={datos.website} />
            <label htmlFor="website" className="fs-6">Sitio Web (opcional)</label>
          </div>
        </div>

      

        <FormControlLabel 
          control={<Checkbox defaultChecked={boolPoliticas} color="success" onChange={handlePoliticas}/>} 
          label="Acepto la Política de Privacidad" 
          className="mb-3"
        />

          <div className="row col s12 text-center">
          <button className={`btn waves-effect waves-light ${ boolPoliticas ? 'bg-primary' : 'disabled' }`} type="submit" disabled={!boolCompleto}  >
            <p className="text-light fw-bold">ENVIAR</p>
          </button>
        </div>
        
        
      </form>
    </div>
    
   
    <Banda seccion={'CONTACTO'} color={'teal accent-4 text-white'} />

  </div>
  <div className="espacio"></div>
  </>

)};

export default Contacto;
