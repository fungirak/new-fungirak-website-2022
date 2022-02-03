import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentes/css/estilos.css';
import '../src/componentes/materialize/css/materialize.min.css';
import 'animate.css';


ReactDOM.render(
  
  <div className="fijar-todo">
      <App />,
  </div>,
  

  document.getElementById('root')
);

