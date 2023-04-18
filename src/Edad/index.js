import React from "react";
import './Edad.css'

function Edad(props) {

    return (
        <div className="edad">
            <p>2</p>
            <label>¿Cuantos años tenes?</label>
            <input
                type="number"
                onChange={props.takeAge}
            ></input>
        </div>
    );
}

export { Edad }