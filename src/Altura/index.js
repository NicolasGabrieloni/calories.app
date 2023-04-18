import React from "react";
import './Altura.css'

function Altura(props) {

    return (
        <div className="altura">
            <p>3</p>
            <label>¿Cuanto medis?</label>
            <input
                type="number"
                onChange={props.numAlt}
            ></input>
            <br></br>
            <div className="buttons2">
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
        </div>
    );
}

export { Altura }