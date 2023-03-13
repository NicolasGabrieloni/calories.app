import React, { useState, useRef } from 'react';
import './App.css';
import { Title } from './Title';
import { Genero } from './Genero';
import { Edad } from './Edad';
import { Altura } from './Altura';
import { Peso } from './Peso';
import { CalculoCalorias } from './CalculoCalorias';
import { Faf } from './FAF';
import { Info } from './Info';
import { Credits } from './Credits';
import { Modal } from './Modal';
import { CuadroModal } from './CuadroModal';


function App() {

  ///////////////// GENDER LOGIC  /////////////////  
  const [gender, setGender] = useState(true);

  const clickHandler = () => {
    setGender(!gender)
  }

  let variableGenero;

  const varGender = () => {
    if (gender) {
      variableGenero = false;
    } else {
      variableGenero = true;
    }
    clickHandler()
    console.log(variableGenero)
  }


  ///////////////// EDAD LOGIC  /////////////////  
  let numberAge;
  const takeAge = (event) => {
    numberAge = parseInt(event.target.value);
    console.log(numberAge)
  }


  ///////////////// ALTURA LOGIC /////////////////
  const [cm, setCm] = useState(true);

  const medicionAltura = () => {
    setCm(!cm);
  };

  let numberAlt;
  const numAlt = (event) => {
    if (cm === true) {
      numberAlt = parseInt(event.target.value);
    } else {
      numberAlt = parseInt(event.target.value * 30.48);
    }
    console.log(numberAlt);
  }



  ///////////////// PESO LOGIC  /////////////////
  const [peso, setPeso] = useState(true);
  const miRef = useRef(null)

  const medicionPeso = () => {
    setPeso(!peso);
    clearInput()
  };

  const clearInput = () => {
    miRef.current.textContent = "";
  }

  let numberPeso;
  const numPeso = (event) => {
    if (peso === true) {
      numberPeso = parseInt(event.target.value);
    } else {
      numberPeso = parseInt(event.target.value / 2.205);
    }
    console.log(numberPeso);
  }



  ///////////////// FAF LOGIC  /////////////////

  const [muyligero, setMuyligero] = useState(false);
  const [ligero, setLigero] = useState(false);
  const [moderado, setModerado] = useState(false);
  const [activo, setActivo] = useState(false);
  const [mactivo, setMactivo] = useState(false);

  let variableFaf;

  const selectMuyLigero = () => {
    setMuyligero(!muyligero);
    setLigero(false);
    setModerado(false);
    setActivo(false);
    setMactivo(false);
    variableFaf = 1.2;
    console.log(variableFaf)
  }

  const selectLigero = () => {
    setLigero(!ligero);
    setMuyligero(false);
    setModerado(false);
    setActivo(false);
    setMactivo(false);
    variableFaf = 1.375;
    console.log(variableFaf)
  }

  const selectModerado = () => {
    setModerado(!moderado);
    setLigero(false);
    setMuyligero(false);
    setActivo(false);
    setMactivo(false);
    variableFaf = 1.55;
    console.log(variableFaf)
  }

  const selectActivo = () => {
    setActivo(!activo);
    setModerado(false);
    setLigero(false);
    setMuyligero(false);
    setMactivo(false);
    variableFaf = 1.725;
    console.log(variableFaf)
  }

  const selectMuyActivo = () => {
    setMactivo(!mactivo);
    setActivo(false);
    setModerado(false);
    setLigero(false);
    setMuyligero(false);
    variableFaf = 1.9;
    console.log(variableFaf)
  }



  ///////////////// OPEN MODAL  /////////////////
  const [openModal, setOpenModal] = useState(false);

  const abrirModal = () => {
    setOpenModal(!openModal)
  }


  ///////////////// CALCULO CAL  /////////////////
  let finalResult;
  let totalTMB;

  const totalMacho = () => {
    totalTMB = 66.473
      + (13.751 * numberPeso)
      + (5.0035 * numberAlt)
      - (6.7550 * numberAge);
    if (muyligero === true) {
      finalResult = totalTMB * 1.2
    } else if (ligero === true) {
      finalResult = totalTMB * 1.375
    } else if (moderado === true) {
      finalResult = totalTMB * 1.55
    } else if (activo === true) {
      finalResult = totalTMB * 1.725
    } else if (mactivo === true) { finalResult = totalTMB * 1.9 }
  }

  const totalHembra = () => {
    totalTMB = 655.1
      + (9.463 * numberPeso)
      + (1.8 * numberAlt)
      - (4.6756 * numberAge);
    if (muyligero === true) {
      finalResult = totalTMB * 1.2
    } else if (ligero === true) {
      finalResult = totalTMB * 1.375
    } else if (moderado === true) {
      finalResult = totalTMB * 1.55
    } else if (activo === true) {
      finalResult = totalTMB * 1.725
    } else if (mactivo === true) { finalResult = totalTMB * 1.9 }
  }

  const calculoTMB = () => {
    if (gender === true) {
      totalMacho()
    } else {
      totalHembra()
    }
    calculoIMC()
    console.log(finalResult)
    setOpenModal(true);
  }

  ///////////////// CALCULO IMC  /////////////////
  let IMCresult;
  const calculoIMC = () => {
    IMCresult = numberPeso / Math.pow(numberAlt / 100, 2);
    console.log(IMCresult)
  }



  return (
    <div>
      <Title />

      <div className='contenedorPadre'>
        <div className='bloq1'>

          <Genero
            gender={gender}
            setGender={setGender}
            clickHandler={clickHandler}
            varGender={varGender}
          />

          <Edad
            takeAge={takeAge}
          />
        </div>

        <div className='bloq2'>
          <Altura
            cm={cm}
            setCm={setCm}
            medicionAltura={medicionAltura}
            numAlt={numAlt}
          />
          <Peso
            peso={peso}
            setPeso={setPeso}
            medicionPeso={medicionPeso}
            numPeso={numPeso}
            miRef={miRef}
            clearInput={clearInput}
          />
        </div>
        <Faf
          muyligero={muyligero}
          ligero={ligero}
          moderado={moderado}
          activo={activo}
          mactivo={mactivo}
          selectMuyLigero={selectMuyLigero}
          selectLigero={selectLigero}
          selectModerado={selectModerado}
          selectActivo={selectActivo}
          selectMuyActivo={selectMuyActivo}
        />
      </div>

      <div className='resultados'>
        <CalculoCalorias
          calculoTMB={calculoTMB}
        />
      </div>

      <Info />
      <Credits />

      {!!openModal && (
        <Modal>
          <CuadroModal
            abrirModal={abrirModal}
            finalResult={finalResult}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
