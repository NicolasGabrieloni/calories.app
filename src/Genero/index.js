import React from "react";
import './Genero.css'
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";


function Genero(props) {

    return (
        <div className="genero">
            <p>1</p>
            <h3>¿Cual es tu genero?</h3>
            <div className="buttons">
                <span><BsGenderMale /></span>
                <button
                    className={props.gender ? 'active' : 'gender'}
                    onClick={props.varGender}
                >Hombre
                </button>

                <span><BsGenderFemale /></span>
                <button
                    className={!props.gender ? 'active' : 'gender'}
                    onClick={props.varGender}
                >Mujer
                </button>
            </div>
        </div>
    )};

export { Genero }