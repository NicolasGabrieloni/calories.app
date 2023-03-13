import React from "react";
import './CuadroModal.css'

function CuadroModal(props) {
    return (
        <div>
            <div className='containerResult'>
                <p className='Result'>
                    Tus calorias recomendadas son: 
                    {props.finalResult}
                </p>
                <p className='Result'>Tu Indice de Masa Corporal es:</p>

                <button className='buttonModal'
                    onClick={props.abrirModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export { CuadroModal }