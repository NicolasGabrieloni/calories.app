import React from "react"; 
import './Edad.css'

function Edad (props) {

    return (
        <div className="edad">
            <p>2</p>
            <h3>¿Cuantos años tenes?</h3>
            <input 
            type="number"
            onChange={props.takeAge}
            ></input>
        </div>
    );
}

export { Edad }