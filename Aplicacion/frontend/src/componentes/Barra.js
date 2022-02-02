import React from 'react';

import logoPersona from './img/logoPersona.png';
import logoSkills from './img/logoSkills.png';
import logoEstudios from './img/logoEstudios.png';
import logoPortafolio from './img/logoPortafolio.png';
import logoContacto from './img/logoContacto.png';

import DescripcionPersona from './DescripcionPersona';
import DescripcionSkills from './DescripcionSkills';
import DescripcionEstudios from './DescripcionEstudios';
import DescripcionPortafolio from './DescripcionPortafolio';
import Contacto from './Contacto';
import Politicas from './Politicas';
import Iconmenu from './helpers/Iconmenu';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  
const posicionar = () => {
    window.scroll(0, 510);
  }


const Barra = () => {
   

  return <div className="">
            <Router>
                <div className="">
                    <ul className="border border-top border-2  presentacion d-flex justify-content-center  no-wrap fixed-bottom  bg-white shadow-lg mx-auto m-0 mb-3 mt-5">

                    <Iconmenu pos={posicionar} logo={logoPersona} ruta={'/perfil'} />
                    <Iconmenu pos={posicionar} logo={logoEstudios} ruta={'/estudios'} />
                    <Iconmenu pos={posicionar} logo={logoSkills} ruta={'/skills'} />
                    <Iconmenu pos={posicionar} logo={logoPortafolio} ruta={'/portafolio'} />
                    <Iconmenu pos={posicionar} logo={logoContacto} ruta={'/contacto'} />

                    </ul>

                    <Routes>
                        <Route exact path="/perfil" element={<DescripcionPersona banda={'PERFIL'}/>} />
                        <Route exact path="/estudios" element={<DescripcionEstudios banda={'ESTUDIOS'}/>} />
                        <Route exact path="/skills" element={<DescripcionSkills banda={'HABILIDADES'}/>} />
                        <Route exact path="/portafolio" element={<DescripcionPortafolio banda={'PORTAFOLIO'}/>} />
                        <Route exact path="/contacto" element={<Contacto banda={'CONTACTO'}/>} />
                        <Route exact path="/politicas" element={<Politicas banda={'POLITICA DE PRIVACIDAD'}/>} />
                    </Routes>
                    
                </div>
            </Router>

        </div>;
};

export default Barra;
