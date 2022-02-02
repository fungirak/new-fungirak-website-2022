import React from 'react';
import fungi1 from './img/fungi1.jpg';
import fungi2 from './img/fungi2.jpg';
import logoContacto from './img/logoContacto.png';
import Banda from './helpers/Banda';

const DescripcionPersona = () => {
    return (
        <div className="container mb-5">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Acerca de</h1>

            <div className="d-flex justify-content-center shadow rounded  mt-5">
                <div className="row d-flex justify-content-around m-3 efecto">
                    <div className="card col-md-4 m-3 col-sm-8 p-3 rounded border border-success shadow">
                        <div className="card-header d-flex justify-content-center bg-transparent border border-0">
                            <img src={fungi1} alt="" className="fungi shadow-lg border border-3 border-white efecto" />
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Hola! Mi nombre es Gabriel Lazzarini, soy un programador Full Stack y actualmente estudio Ingeniería en Informática en la Universidad Nacional del Litoral. <br></br>
                                Además soy Técnico en Informática, trabajé 2 años de forma independiente y  realicé una pasantía en el sector informático del hospital
                                José María Cullen de la ciudad de Santa Fe. <br />
                                Actualmente me dedico a investigar, estudiar y practicar Desarrollo de Software Frontend y Backend con JavaScript y TypeScript. 
                            </p>
                        </div>
                    </div>

                    <div className="card  col-md-4 m-3  col-sm-8  p-3 rounded border border-danger shadow">
                        <div className="card-header d-flex justify-content-center bg-transparent border border-0">
                            <img src={fungi2} alt="" className="fungi  shadow-lg border border-3 border-white efecto " />
                        </div>
                        <div className="card-body">
                            <p className="text-muted">
                                Este es mi perfil de  Github en donde publico los códigos fuente de mis proyectos personales. 
                               <a href="https://github.com/fungirak" target="_blank" rel="noopener noreferrer" className="border border-dark  rounded fw-bold text-dark">
                                   Ver Perfil de Github   
                                </a><br /><br/>
                                Si te gusta mi perfil y te interesa contactarme, envíame un mensaje para estar en contacto en mi   
                                <a href="https://ar.linkedin.com/in/gabriel-lazzarini" target="_blank" rel="noopener noreferrer" className=" border border-primary  rounded fw-bold "> Cuenta de Linkedin </a>
                                ó en la sección de <b>chat</b>
                                <div className="mt-3 d-flex justify-content-center">
                                    <img src={logoContacto} alt="..." className="icon-pres efecto" />
                                </div>
                               
                            </p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="espacio"></div>

           
            <Banda seccion={'PERFIL'} color={'bg-primary text-white'} />

        </div>
    )
}

export default DescripcionPersona
