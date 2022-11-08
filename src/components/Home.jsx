import React from "react";
import {ListCharacters} from "./ListCharacters.jsx";

export const Home = () => {
  return (
    <main className='grid grid-cols-1 bg-slate-900 text-white md:min-h-screen gap-2'>
      <h1 className='text-center text-lg font-bold uppercase max-h-max self-center'>
        Lista de Personajes de Rick and Morty
      </h1>

      <section className='w-full h-fit grid justify-center items-center gap-4 '>
        <ListCharacters />
      </section>
    </main>
  );
};
