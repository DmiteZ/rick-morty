import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {unicoPersonaje} from "../funciones/funciones.js";
import {Character} from "./Character.jsx";

export const Characters = () => {
  const [personaje, setPersonaje] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    unicoPersonaje(id, setPersonaje);
  }, [id]);

  return (
    <>
      {personaje !== null ? (
        <Character personaje={personaje} />
      ) : (
        "No hay personaje"
      )}
    </>
  );
};
