import React from "react";
import './CalculoCalorias.css'

function CalculoCalorias(props) {


    return (
        <div className="calculoCalorias">
            <p
                onClick={props.calculoTMB}
            >
                Calcular calorias
            </p>
        </div>
    );
}

export { CalculoCalorias }