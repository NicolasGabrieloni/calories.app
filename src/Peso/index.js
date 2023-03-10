import React from "react";
import './Peso.css'


function Peso(props) {

    return (
        <div className="peso">
            <p>4</p>
            <h3>¿Cuanto pesas?</h3>
            <input
                ref={props.miRef}
                type="number"
                onChange={props.numPeso}
            ></input>
            <br></br>
            <button
                className={props.peso ? 'activeP' : 'pesoB'}
                onClick={props.medicionPeso}
            >kg
            </button>
            <button
                className={!props.peso ? 'activeP' : 'pesoB'}
                onClick={props.medicionPeso}
            >lb
            </button>
        </div>
    );
}

export { Peso }