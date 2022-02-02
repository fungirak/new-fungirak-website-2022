import React from 'react';
import './css/estilos.css';
import logoJs from './img/logoJs.png';
import logoTs from './img/logoTs.png';
import logoMongodb from './img/logoMongodb.svg';
import logoExpress from './img/logoExpress.svg';
import logoReact from './img/logoReact.svg';
import logoAngular from './img/logoAngular.png';
import logoNodejs from './img/logoNodejs.svg';
import logoMysql from './img/logoMysql.svg';
import logoCss from './img/logoCss.png';
import logoBootstrap from './img/logoBootstrap.svg';
import logoMaterialize from './img/logoMaterialize.png';
import logoSass from './img/logoSass.svg';
import logoGit from './img/logoGit.svg';
import logoUbuntu from './img/logoUbuntu.svg';
import logoWindows from './img/logoWindows.png';
import logoVisualStudioCode from './img/logoVisualStudioCode.png';
import logoGithub from './img/logoGithub.svg';

import Logoskills from './helpers/Logoskills';
import Banda from './helpers/Banda';


const urlJavascript = "https://developer.mozilla.org/es/docs/Web/JavaScript";
const urlTypescript = "https://www.typescriptlang.org";
const urlMongodb = "https://www.mongodb.com/es";
const urlExpress = "https://expressjs.com/es/";
const urlReactjs = "https://es.reactjs.org/";
const urlAngular = "https://angular.io";
const urlNodejs = "https://nodejs.org/es/";
const urlMysql = "https://www.mysql.com/";
const urlCss = "https://developer.mozilla.org/en-US/docs/Web/CSS";
const urlBootstrap = "https://getbootstrap.com/";
const urlMaterialize = "https://materializecss.com/";
const urlSass = "https://sass-lang.com/";
const urlGit = "https://git-scm.com/";
const urlUbuntu = "https://ubuntu.com/";
const urlWindows = "https://www.microsoft.com/en-us/windows?r=1";
const urlVisualStudioCode = "https://code.visualstudio.com/";
const urlGithub = "https://github.com/";



const DescripcionSkills = () => {
    return (
        <div className="container ">
            <h1 className="text-center fw-normal mt-3 p-2 shadow-lg rounded-pill">Skills</h1>

            <div className="mt-5 mb-5">
                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">LENGUAJES Y TECNOLOGIAS</h5>
                   
                    <Logoskills url={urlJavascript} logo={logoJs} nombre={'JavaScript'} border={'border-warning'} />
                    <Logoskills url={urlTypescript} logo={logoTs} nombre={'TypeScript'} border={'border-primary'} />
                   

                </div>

                <div className="row  p-3  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">STACK MERN JAVASCRIPT</h5>

                    <Logoskills url={urlMongodb} logo={logoMongodb} nombre={'Mongo DB'}border={'border-success'} />
                    <Logoskills url={urlExpress} logo={logoExpress} nombre={'Express'} border={'border-dark'} />
                    <Logoskills url={urlReactjs} logo={logoReact} nombre={'React'} border={'border-info'} /> 
                    <Logoskills url={urlNodejs} logo={logoNodejs} nombre={'Node'} border={'border-success'} />

                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">ANGULAR</h5>

                    <Logoskills url={urlAngular} logo={logoAngular} nombre={'Angular'} border={'border-danger'} />

                </div>


                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light">BASE DE DATOS SQL y NO SQL</h5>

                    <Logoskills url={urlMysql} logo={logoMysql} nombre={'MySql'} border={'border-primary'} />
                    <Logoskills url={urlMongodb} logo={logoMongodb} nombre={'Mongo DB'} border={'border-success'} />

                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light  mb-3">CSS</h5>

                    <Logoskills url={urlCss} logo={logoCss} nombre={'CSS 3'} border={'border-primary'} />
                    <Logoskills url={urlBootstrap} logo={logoBootstrap} nombre={'Bootstrap'} border={'border-gray'} />
                    <Logoskills url={urlMaterialize} logo={logoMaterialize} nombre={'Materialize'} border={'border-danger'} />
                    <Logoskills url={urlSass} logo={logoSass} nombre={'Sass'} border={'border-danger'} />
                  
                </div>

                <div className="row  p-3 d-flex justify-content-center  shadow rounded m-5">
                    <h5 className="text-center mt-3 fw-light mb-3">GLOBALES</h5>
                    
                    <Logoskills url={urlGit} logo={logoGit} nombre={'GIT'} border={'border-danger'} />
                    <Logoskills url={urlGithub} logo={logoGithub} nombre={'Github'} border={'border-dark'} />
                    <Logoskills url={urlUbuntu} logo={logoUbuntu} nombre={'Ubuntu Linux'} border={'border-danger ms-1'} />
                    <Logoskills url={urlWindows} logo={logoWindows} nombre={'Windows'} border={'border-info'} />
                    <Logoskills url={urlVisualStudioCode} logo={logoVisualStudioCode} nombre={'VSC'} border={'border-primary'} />
                
                </div>
            </div>

            <div className="espacio"></div>
            
            <Banda seccion={'HABILIDADES'} color={'yellow'} />

        </div>
    )
}

export default DescripcionSkills
