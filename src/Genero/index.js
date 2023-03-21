import React from "react";
import './Genero.css'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";


function Genero(props) {

    return (
        <div className="genero">
            <p>1</p>
            <h3>¿Cual es tu sexo?</h3>
            <div className="buttons">
                <span><BsGenderMale /></span>
                <button
                    className={props.state.gender ? 'active' : 'gender'}
                    onClick={props.clickHandler}
                >Hombre
                </button>

                <span><BsGenderFemale /></span>
                <button
                    className={!props.state.gender ? 'active' : 'gender'}
                    onClick={props.clickHandler}
                >Mujer
                </button>
            </div>
        </div>
    )};

export { Genero }