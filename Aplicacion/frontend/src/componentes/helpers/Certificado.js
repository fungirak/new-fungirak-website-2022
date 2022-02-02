import React from 'react';

const Certificado = ({certificado, modH,  }) => {
  return <div className="col-md-4 efecto">
            <img src={certificado} alt="" className="certificado shadow-lg" />
            <div className="card-body">
                    <button onClick={() => modH(true, certificado)} className="btn btn-dark mb-4">Ver</button>
            </div>
      </div>;
};

export default Certificado;
