import React from 'react';
import { Contacto } from './class.contacto';
import COMPONENTEB from './COMPONENTE B';

const COMPONETEA = () => {
        const ejemplo = new Contacto('Miguel', 'Ángel', 'correo@correo.com', true);
    return (
        <div>
        <COMPONENTEB contacto ={ejemplo}></COMPONENTEB>
        </div>
    );
};



export default COMPONETEA;
