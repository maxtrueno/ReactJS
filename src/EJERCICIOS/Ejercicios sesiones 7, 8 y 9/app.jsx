import React, { useState } from "react";
import ContactComponent from "./contactComponent";
import ContactForm from "./contactForm";
import "./app.css";
const Ejercicio_7_8_9 = () => {
  const defaultContact = [
    { nombre: "Miguel", email: "Fernandez", conectado: true },
    { nombre: "Maria", email: "Jiménez", conectado: false },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="Ejercicio_7_8_9">
      <h1>Lista Contactos</h1>
      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent
              key={index}
              contacto={contacto}
              changeState={changeState}
              remove={remove}
            />
          );
        })}
      </div>
      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
};

export default Ejercicio_7_8_9;