import React from 'react';
import { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';
import './materialize-v1.0.0/materialize/css/materialize.min.css';
import swal from 'sweetalert';


const Comentarios = () => {

    const vermas = useRef();

    const [completo, setCompleto] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [cargarComentarios, setCargarComentarios] = useState([]);
    const [contador, setContador] = useState(5);
    const [comentarios, setComentarios] = useState([]);
    const [comentario, setComentario] = useState({
        nombre: '',
        apellido: '',
        comentarioUsuario: ''
    })

    const handleInputChange = (event) => {
        setComentario({
            ...comentario,
            [event.target.name] : event.target.value
        });
    }

    useEffect(()=>{
        if(comentario.nombre && comentario.apellido && comentario.comentarioUsuario){
          setCompleto(true); // Habilita el botón Enviar.
        }
        return ()=>{
         
        }
    },[comentario]);

    const enviarDatos = (e) => {
      e.preventDefault()
      // Muestra una Alerta de confirmación para enviar el comentario.
      swal({
        title: "¿Enviar el Comentario?",
        text: "¡FUNGIRAK Agradece tu opinión!",
        icon: "success",
        buttons: true,
      })
      .then((value) => {
        console.log(value);
        if(value){
          guardarComentario();
          swal({
            title: "Comentario",
            text: "ENVIADO",
            icon: "success",
            buttons: false,
            timer: 1500,
          });
        } else {
          swal({
            title: "Comentario",
            text: "NO ENVIADO",
            icon: "info",
            buttons: false,
            timer: 1000,
          });
          setComentario({
            nombre: '',
            apellido: '',
            comentarioUsuario: ''
          });
        }
      });
     
    const guardarComentario = () => {

      fetch('http://localhost:4000/comentarios', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(comentario)
      })
        .then((comentario) => comentario.json(comentario))
        .then((comentario) => console.log(comentario))

        setEnviado(true);

        setComentario({
          nombre: '',
          apellido: '',
          comentarioUsuario: ''
        });

        setCompleto(false);

        
          M.toast({html: 'COMENTARIO ENVIADO', classes: 'rounded bg-dark fs-5 fixed-top d-flex justify-content-center mx-auto' ,displayLength: 1500 }) ;
        

      }
    }

    // Solicitar Todos los comentarios de la BD.
    useEffect(() => {
      fetch('http://localhost:4000/comentarios', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
      })
        .then((comentarios) => comentarios.json(comentarios))
        .then((comentarios) => setComentarios(comentarios))
    },[]);

     
        // CARGA DE COMENTARIOS "VER MÁS"
        const detallesComentarios = (mas) => {
          let cantidad = comentarios.length;
            console.log(cantidad);
            console.log(contador);
          if( cantidad-contador<5 ){ 
             let comentariosMostrados  = new Array(cantidad);
            
             for(let i = 0 ; i < cantidad; i++){
               comentariosMostrados[i] = comentarios[i];
             }
  
             comentariosMostrados.map( comentario => (console.log({comentario})));
             setCargarComentarios(comentariosMostrados);

            vermas.current.remove();

          } else {
            setContador(contador+mas);
    
             let comentariosMostrados  = new Array(cantidad - (cantidad-contador));
             console.log(comentariosMostrados);
             for(let i = 0 ; i < cantidad - (cantidad-contador) ; i++){
               comentariosMostrados[i] = comentarios[i];
             }
  
             comentariosMostrados.map( comentario => (console.log({comentario})));
             setCargarComentarios(comentariosMostrados);
          }
        }
       
       

        useEffect(()=>{
          M.CharacterCounter.init(document.querySelector('#comentarioUsuario'));
        },[]);


  return <div>
      <>
      <div className="container-fluid  mb-5 mt-3 shadow-lg border border-3  rounded p-5">

        <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12  p-2">

              <h3 className="text-center mt-3  fw-normal p-2 shadow-lg rounded-pill">Haz un comentario</h3>
              <div className="row justify-content-center">
              <form className=" mt-4" onSubmit={enviarDatos}>

                  <div className="row m-0">
                    <div className="input-field  col s6">
                        <input id="nombre" type="text"  className="validate"   required onChange={handleInputChange} name="nombre" value={comentario.nombre} />
                        <label htmlFor="nombre" className="fs-6">Nombre *</label>
                        <span className="helper-text" data-error="Inválido" data-success="Válido"></span>
                    </div>
                  
                    <div className="input-field col s6">
                        <input id="apellido" type="text"  className="validate"   required onChange={handleInputChange} name="apellido" value={comentario.apellido} />
                        <label htmlFor="apellido" className="fs-6">Apellido *</label>
                        <span className="helper-text" data-error="Inválido" data-success="Válido"></span>
                    </div>
                  </div>


                  <div className="row m-0">
                  <div className="input-field col s12">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea id="comentarioUsuario" className="materialize-textarea" maxLength="222"  required onChange={handleInputChange} name="comentarioUsuario" value={comentario.comentarioUsuario} data-length="222"></textarea>
                      <label htmlFor="comentarioUsuario" className="fs-6">Comentario *</label>
                      <span className="helper-text" data-error="Inválido" data-success="Válido">222 caractéres máximo</span>
                  </div>
                  </div>

                  <div className="row col s12 text-center">
                  <button className="btn waves-effect waves-light bg-primary" type="submit" disabled={!completo} >
                      <p className="text-light fw-bold">ENVIAR</p>
                  </button>
                  </div>

              </form>

            

              </div>

                
              </div>
        
     
       
            <div className="col-md-5 col-sm-12">
            <h3 className="text-center mt-3  fw-normal p-2 shadow-lg rounded-pill mb-5">Comentarios</h3>
                <div className="row justify-content-center ">
                    
                    {
                        cargarComentarios.map( comentario => (
                            <div className="row ">
                              <div className="col-12  d-flex p-2 shadow rounded border " key={comentario._id}>
                                <div className="col-1 mt-3 ml-2 ms-3">
                                  <i className="small material-icons">account_circle</i>
                                </div>
                                
                                <div className="col-8 ms-3">
                                    <div className="text-primary fw-bold mt-2">
                                        <span>{comentario.nombre}</span> <span>{comentario.apellido}</span>
                                    </div>
                                    
                                    <div className="">
                                      <p>{comentario.comentarioUsuario}</p>
                                      <div className="col-12 text-end ms-5">
                                          <span className="small">Publicado el {comentario.createdAt}</span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        ))
                    }
                </div>

                
                <div className="row justify-content-center">
                  <button className="btn waves-effect waves-dark fw-bold" id="vermas" ref={vermas} onClick={() => detallesComentarios(5)}>VER MÁS</button>
                </div>
          </div>
        </div>

     

  </div>
      </>
  </div>;
};

export default Comentarios;
