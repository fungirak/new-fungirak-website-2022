import React from 'react';

const Banda = ({seccion, color}) => {
  return <div className="w-100 fixed-bottom">
            <div className={`${color} fw-bold fs-6  text-center `}>{seccion}</div>
      </div>
  ;
};

export default Banda;
