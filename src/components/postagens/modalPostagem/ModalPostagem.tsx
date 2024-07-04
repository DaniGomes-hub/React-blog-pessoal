import React from 'react';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
return (
<>
    <Popup 
    trigger={<button className='rounded px-4 bg-[#F9A03F] text-white'>Nova postagem</button>} modal>
    <div>

        <FormularioPostagem />
    </div>
    </Popup>
</>
);
}

export default ModalPostagem;