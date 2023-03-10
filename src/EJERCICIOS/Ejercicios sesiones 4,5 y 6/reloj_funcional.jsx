import React, {Component, useState, useEffect} from 'react';

const RelojFuncional = () => {

   const state ={
      fecha: new Date(),
      edad: 0,
      nombre: 'Miguel Ángel',
      apellidos: 'Jurado'
   }


   //Con el useState trabajaremos con la variable estado, en vez de state.
   const [estado, setestado] = useState(state);

    //Funcion que nos devuelve la hora y la edad + 1
    const actualiceUser = () => {
      return setestado({
        fecha: new Date(),
        edad: estado.edad + 1,
        nombre: estado.nombre,
        apellidos: estado.apellidos,
      });
    };



   //Con el useEffect aplicamos el efecto
   useEffect(() => {
      //Aplicamos que la funcion anterior se ejecute cada segundo
      const subiredad = setInterval(() => {
        actualiceUser();
      }, 1000);
      return () => {
        clearInterval(subiredad);
      };
    });





   return (
      <div>
      <h2>
         Hora Actual:
         {estado.fecha.toLocaleTimeString()}
         </h2>
         <h3>{estado.nombre} {estado.apellidos}</h3>
         <h1>Edad: {estado.edad}</h1>
         
      </div>
   );
}

export default RelojFuncional;
