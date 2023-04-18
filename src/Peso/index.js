import React from "react";
import './Peso.css'


function Peso(props) {

    return (
        <div className="peso">
            <p>4</p>
            <label>¿Cuanto pesas?</label>
            <input
                type="number"
                onChange={props.numPeso}
            ></input>
            <br></br>
            <div className="buttons2">
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
        </div>
    );
}

export { Peso }