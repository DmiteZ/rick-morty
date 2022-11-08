import React from "react";

export const Character = ({personaje}) => {
  return (
    <div className='grid w-full grid-cols-1 items-center gap-4 rounded-xl overflow-hidden text-start px-2 md:grid-flow-col md:auto-cols-max md:max-w-max md:justify-self-center'>
      <div className='w-full uppercase grid grid-cols-1'>
        <p className='justify-self-center hidden md:block md:justify-self-start'>
          {personaje.name}
        </p>
        <p>
          Id: <span className='capitalize'>{personaje.id}</span>
        </p>
        <p>
          Estado actual: <span className='capitalize'>{personaje.status}</span>
        </p>
        <p>
          Especie: <span className='capitalize'>{personaje.species}</span>
        </p>
      </div>
      <figure className='w-52 h-52 justify-self-center'>
        <img
          src={personaje.image}
          alt={personaje.name}
          className='object-cover h-full w-full rounded-md '
        />
      </figure>
    </div>
  );
};
