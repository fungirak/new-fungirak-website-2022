import React, { useState, useEffect } from 'react'
import certificadoReact from './img/certificadoReact.png';
import certificadoPhp from './img/certificadoPhp.png';
import certificadoFullStack from './img/certificadoFullStack.png';
import certificadoMongoDB from './img/Curso-MongoDB.jpeg';
import certificadoArgPrograma1 from './img/certificadoArgPrograma1.png';

import Certificado from './helpers/Certificado';
import Banda from './helpers/Banda';

import Modal from 'react-modal'

const DescripcionEstudios = () => {
    const [currentImage, setCurrentImage] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

  
    useEffect(() => {
        Modal.setAppElement('body');
    })

     const modalHandler = (isOpen, image) => {
        setModalIsOpen(isOpen)
        setCurrentImage(image)
    }

    return (
        <div className="container  mb-5">
            <div className="mt-3 d-flex justify-content-center row">
                <h1 className="text-center fw-normal  mb-3 p-2 shadow-lg rounded-pill">Estudios</h1>
                    <div className="mt-2">
                        <h4 className=" text-center fst-normal">Técnico en Informática</h4>
                        <h4 className=" text-center fw-normal ">Estudiante de Ingeniería en Informática</h4>
                        <h5 className=" text-center fw-lighter">Universidad Nacional del Litoral</h5>
                    </div>
                <div className="row d-flex justify-content-center">
                    <h4 className="text-center fw-bold">Cursos Extracurriculares Realizados:</h4>

                    <div className="mt-5 mb-5 p-5 shadow rounded  justify-content-center" >
                        <div className="row col-sm-8 col-md-12 text-center">
                    
                            <Certificado certificado={certificadoArgPrograma1} modH={modalHandler} />
                            <Certificado certificado={certificadoMongoDB} modH={modalHandler} />
                            <Certificado certificado={certificadoFullStack} modH={modalHandler} />
                            <Certificado certificado={certificadoReact} modH={modalHandler} />
                            <Certificado certificado={certificadoPhp} modH={modalHandler} />
                        
                        
                            <Modal isOpen={modalIsOpen}  onRequestClose={() => modalHandler(false, currentImage)} style={{content: {right: "18%", left: "18%", top: "0%"  } }} >
                                <img src={currentImage} alt="..."   className="diplomas"/>
                            </Modal>
                    
                        </div>
                    </div>
                </div>
            </div>

            <Banda seccion={'ESTUDIOS'} color={'light-blue accent-3 text-white'} />

        </div>
    )
}

export default DescripcionEstudios
