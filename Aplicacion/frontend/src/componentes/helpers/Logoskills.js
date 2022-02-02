import React from 'react';

const Logoskills = ({url, logo, nombre, border}) => {
  return <div className="col-md-3 col-sm-10">
            <div className={`card m-2 shadow border border-0 p-2 border-5 ${border} border-start efecto`}>
                <button className="border border-0 bg-transparent d-flex justify-content-start">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="" className="logo-card" />
                    </a>
                    <p className="mt-3 mx-auto text-muted fs-5">{nombre}</p>
                </button>
            </div>
        </div>
      ;
};

export default Logoskills;
