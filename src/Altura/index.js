import React from "react";
import './Altura.css'

function Altura(props) {

    return (
        <div className="altura">
            <p>3</p>
            <h3>¿Cuanto medis?</h3>
            <input 
            type="number"
            onChange={props.numAlt}
            ></input>
            <br></br>
            <button
                className={props.cm ? 'activecm' : 'medi'}
                onClick={props.medicionAltura}
            >cm
            </button>
            <button
                className={!props.cm ? 'activecm' : 'medi'}
                onClick={props.medicionAltura}
            >ft
            </button>
        </div>
    );
}

export { Altura }