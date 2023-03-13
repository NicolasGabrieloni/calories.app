import React from "react";
import './Credits.css'
import { IoLogoGithub } from "react-icons/io5";

function Credits () {
    return (
        <div className="creditContainer">
            <p>Developed by <IoLogoGithub /> <a href="https://github.com/NicolasGabrieloni">Nicolás Gabrieloni</a></p>
        </div>
    )
}

export { Credits }