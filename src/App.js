import React, { useState } from 'react';
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


  const [state, setState] = useState({
    valueEdad: '',
    valueAlto: '',
    valuePeso: '',
    valueFaf: '',
    gender: true,
    cm: true,
    peso: true,
    muyligero: false,
    ligero: false,
    moderado: false,
    activo: false,
    mactivo: false,
    openModal: false,
    finalResult: '',
    imc: '',
    IMCresult: '',
  })


  ///////////////// GENDER LOGIC  /////////////////

  const clickHandler = () => {
    setState({
      ...state,
      gender: !state.gender,
      finalResult: '',
    });
  }


  ///////////////// EDAD LOGIC  /////////////////

  const takeAge = (event) => {
    setState((prevState) => ({
      ...prevState,
      valueEdad: parseInt(event.target.value),
    }));
  }

  ///////////////// ALTURA LOGIC /////////////////

  const medicionAltura = () => {
    setState({
      ...state,
      cm: !state.cm,
      valueAlto: '',
    });
  };

  const numAlt = (event) => {
    const multipler = 30.48;
    const numbercm = event.target.value;
    if (state.cm === true) {
      setState({
        ...state,
        valueAlto: parseInt(numbercm),
      })
    } else {
      setState({
        ...state,
        valueAlto: numbercm * multipler,
      })
    }
  }


  ///////////////// PESO LOGIC  /////////////////
  const medicionPeso = () => {
    setState({
      ...state,
      peso: !state.peso,
      valuePeso: '',
    });
  };



  const numPeso = (event) => {
    const divider = 2.205;
    const numberpeso = event.target.value;
    if (state.peso === true) {
      setState({
        ...state,
        valuePeso: parseInt(numberpeso),
      })
    } else {
      setState({
        ...state,
        valuePeso: numberpeso / divider,
      })
    }
  }



  ///////////////// FAF LOGIC  /////////////////


  const selectMuyLigero = () => {
    setState({
      ...state,
      muyligero: true,
      ligero: false,
      moderado: false,
      activo: false,
      mactivo: false,
    });
  }

  const selectLigero = () => {
    setState({
      ...state,
      muyligero: false,
      ligero: true,
      moderado: false,
      activo: false,
      mactivo: false,
    });
  }

  const selectModerado = () => {
    setState({
      ...state,
      muyligero: false,
      ligero: false,
      moderado: true,
      activo: false,
      mactivo: false,
    });
  }

  const selectActivo = () => {
    setState({
      ...state,
      muyligero: false,
      ligero: false,
      moderado: false,
      activo: true,
      mactivo: false,
    });
  }

  const selectMuyActivo = () => {
    setState({
      ...state,
      muyligero: false,
      ligero: false,
      moderado: false,
      activo: false,
      mactivo: true,
    });
  }

  ///////////////// OPEN MODAL  /////////////////

  const abrirModal = () => {
    setState({
      ...state,
      openModal: !state.openModal,
    });
  }


  ///////////////// CALCULO CAL  /////////////////
  const calculoTMB = () => {
    if (state.gender === true) {
      totalMacho()
    } else {
      totalHembra()
    }
    calculoIMC()
    console.log(state.finalResult)
    setState({
      ...state,
      openModal: true,
    });
  }

  const totalestmb1 = 66.473
    + (13.751 * state.valuePeso)
    + (5.0035 * state.valueAlto)
    - (6.7550 * state.valueEdad);

  const totalMacho = () => {
    if (state.muyligero === true) {
      state.finalResult = (totalestmb1 * 1.2).toFixed(2)
    } else if (state.ligero === true) {
      state.finalResult = (totalestmb1 * 1.375).toFixed(2)
    } else if (state.moderado === true) {
      state.finalResult = (totalestmb1 * 1.55).toFixed(2)
    } else if (state.activo === true) {
      state.finalResult = (totalestmb1 * 1.725).toFixed(2)
    } else if (state.mactivo === true) {
      state.finalResult = (totalestmb1 * 1.9).toFixed(2)
    }
  }

  const totalestmb2 = 655.1
    + (9.463 * state.valuePeso)
    + (1.8 * state.valueAlto)
    - (4.6756 * state.valueEdad);

  const totalHembra = () => {
    if (state.muyligero === true) {
      state.finalResult = (totalestmb2 * 1.2).toFixed(2)
    } else if (state.ligero === true) {
      state.finalResult = (totalestmb2 * 1.375).toFixed(2)
    } else if (state.moderado === true) {
      state.finalResult = (totalestmb2 * 1.55).toFixed(2)
    } else if (state.activo === true) {
      state.finalResult = (totalestmb2 * 1.725).toFixed(2)
    } else if (state.mactivo === true) {
      state.finalResult = (totalestmb2 * 1.9).toFixed(2)
    }
  }


  ///////////////// CALCULO IMC  /////////////////
  const handleImc = () => {
    setState(state.imc + state.IMCresult)
  }
  const calculoIMC = () => {
    state.IMCresult = (state.valuePeso / Math.pow(state.valueAlto / 100, 2)).toFixed(1);
    handleImc()
    console.log(state.IMCresult)
  }


  return (
    <div>
      <Title />

      <div className='contenedorPadre'>
        <div className='bloq1'>

          <Genero
            state={state}
            clickHandler={clickHandler}
          />

          <Edad
            takeAge={takeAge}
            Edad={state.Edad}
          />
        </div>

        <div className='bloq2'>
          <Altura
            cm={state.cm}
            medicionAltura={medicionAltura}
            numAlt={numAlt}
          />
          <Peso
            peso={state.peso}
            medicionPeso={medicionPeso}
            numPeso={numPeso}
          />
        </div>
        <Faf
          muyligero={state.muyligero}
          ligero={state.ligero}
          moderado={state.moderado}
          activo={state.activo}
          mactivo={state.mactivo}
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

      {!!state.openModal && (
        <Modal>
          <CuadroModal
            abrirModal={abrirModal}
            finalResult={state.finalResult}
            imc={state.IMCresult}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
