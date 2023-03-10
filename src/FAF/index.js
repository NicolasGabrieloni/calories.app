import React from "react";
import './Faf.css';
import { TbBattery, TbBattery1, TbBattery2, TbBattery3, TbBattery4 } from "react-icons/tb";

function Faf(props) {


    return (
        <div className="faf">
            <p className="number">5</p>
            <h3>¿Cuanta actividad haces diariamente?</h3>
            <div className="actividades">
                <div className="actividad">
                    <p className="icon"><TbBattery /></p>
                    <button
                        className={props.muyligero ? 'buttonActive' : 'actividadButton'}
                        onClick={props.selectMuyLigero}
                    >Muy ligera
                    </button>
                    <p>Sentado, tumbado. Poco o nada de ejercicio</p>
                </div>
                <div className="actividad">
                    <p className="icon"><TbBattery1 /></p>
                    <button
                        className={props.ligero ? 'buttonActive' : 'actividadButton'}
                        onClick={props.selectLigero}
                    >Ligera
                    </button>
                    <p>De pie, conducir, planchar, caminar. Deporte 1-3 veces/semana</p>
                </div>
                <div className="actividad">
                    <p className="icon"><TbBattery2 /></p>
                    <button
                        className={props.moderado ? 'buttonActive' : 'actividadButton'}
                        onClick={props.selectModerado}
                    >Moderada
                    </button>
                    <p>Limpiar, caminar rapido, cargar peso. Deporte 3-5 veces/semana</p>
                </div>
                <div className="actividad">
                    <p className="icon"><TbBattery3 /></p>
                    <button
                        className={props.activo ? 'buttonActive' : 'actividadButton'}
                        onClick={props.selectActivo}
                    >Activa
                    </button>
                    <p>Contruccion, subir escalera. Deporte 6-7 veces/semana</p>
                </div>
                <div className="actividad">
                    <p className="icon"><TbBattery4 /></p>
                    <button
                        className={props.mactivo ? 'buttonActive' : 'actividadButton'}
                        onClick={props.selectMuyActivo}
                    >Muy activa
                    </button>
                    <p>Trabajo de fuerza, correr. Deporte 2hs / dia</p>
                </div>
            </div>
        </div>
    );
}

export { Faf }