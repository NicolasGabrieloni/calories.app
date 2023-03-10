import React from "react";
import './Info.css'

function Info() {
    return (
        <div className="infoContainer">
            <div className="childContainer">
                <h2 className="titleInfo">Calcular y entender las calorías diarias necesitadas</h2>
                <p className="textInfo">
                    ¿Cuántas calorías necesito?
                    ¿Qué es mi consumo de calorías? ¿Cuántas son las calorías diarias necesarias? Estas son las preguntas que cualquier persona interesada en su alimentación y su salud se habrá hecho alguna vez. Pero, ¿cuál es la respuesta? Pues bien, la verdad es que conocerla ¡es vital! Consumir por encima de las calorías necesarias al día significa ganar peso extra. Esto lleva a sobrepeso, a posibles problemas cardiovasculares e incluso obesidad. Por otra parte, consumir un número menor que las calorías diarias recomendadas puede ser igual de peligroso. Privar a tu cuerpo de los nutrientes, minerales y vitaminas esenciales puede conducir a problemas de salud muy serios. Con la calculadora de calorías diarias podrás calcular las calorías diarias que tu cuerpo necesita. Simplemente tienes que agregar la información requerida y, ya quieras mantener, ganar o perder peso, ¡nuestra calculadora de calorías diarias te pondrá en el buen camino!
                </p>
                <h2 className="titleInfo">Cómo funciona nuestra calculadora de calorías diarias</h2>
                <p className="textInfo">
                    Entonces, ¿cómo es que nuestra calculadora da con tu necesidad calórica exacta? Tu consumo de calorías depende de varios factores, incluidos el género, la edad y la actividad diaria. Nuestra calculadora de calorías diarias tiene en cuenta todos esos factores. El género, por ejemplo, juega un papel esencial en el cálculo de calorías diarias necesarias: no requieren las mismas calorías diarias mujeres, hombres o niños. Los hombres tienen por norma general un mayor porcentaje muscular que las mujeres. Ya que los músculos queman calorías mucho más rápido que la grasa, la necesidad calórica de los hombres suele ser mayor que la de las mujeres. La edad también es importante: a medida que nuestros cuerpos envejecen, queman cada vez menos calorías. Eso significa que conforme una persona envejece su metabolismo se ralentiza y, por tanto, el número de calorías necesarias al día disminuye. Este es un factor esencial, especialmente para alguien que no reduce su consumo calórico de un año para otro y que en consecuencia gana peso. Por último, pero no por ello menos importante, está el factor de la actividad y el estilo de vida. Aquellas personas con un estilo de vida más activo quemarán más calorías durante el día y necesitarán más calorías. Por supuesto, quienes además hagan deporte y, por tanto, aumenten su masa muscular, tendrán una necesidad calórica aún mayor.
                </p>
            </div>
        </div>
    )
}

export { Info }