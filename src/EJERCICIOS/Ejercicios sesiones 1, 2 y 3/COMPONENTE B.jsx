import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './class.contacto';


const COMPONENTEB = ({contacto}) => {
    return (
      <div>
        <h2>
          Nombre: {contacto.nombre}
        </h2>
        <h3>
          Apellido: {contacto.apellido}
        </h3>
        <h4>
          Correo: {contacto.email}
        </h4>
        <h5>
          Contacto: {contacto.conectado ? 'En línea' : 'No disponible' }
        </h5>
      </div>
    )
  }

COMPONENTEB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default COMPONENTEB;


