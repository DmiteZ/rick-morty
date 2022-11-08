import React, {useEffect, useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {todosPersonajes} from "../funciones/funciones.js";

export const ListCharacters = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <div className='hidden md:grid px-10'>
        <Outlet />
      </div>

      <ul className='w-full grid grid-cols-1 gap-3 auto-rows-max justify-self-center px-2 py-2 md:grid-cols-4'>
        {personajes !== null
          ? personajes.map((personaje) => (
              <li
                key={personaje.id}
                className='w-full text-center bg-slate-600 rounded-lg hover:cursor-pointer'>
                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-slate-600"
                        : "hover:bg-slate-300 hover:text-black"
                    } block w-full h-full py-3 rounded-lg`
                  }
                  to={`personaje/${personaje.id}`}>
                  {({isActive}) => (
                    <div>
                      <p className='uppercase'>{personaje.name}</p>
                      <div className='md:hidden'>
                        {isActive ? <Outlet /> : ""}
                      </div>
                    </div>
                  )}
                </NavLink>
              </li>
            ))
          : "No hay personajes"}
      </ul>
    </>
  );
};
