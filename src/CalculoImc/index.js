import React from "react";
import './CalculoImc.css'

function CalculoImc (props) {


    return (
        <div className="calculoIMC">
            <p
            onClick={props.calculoIMC}
            >Calcular IMC</p>
        </div>
    );
}

export { CalculoImc }