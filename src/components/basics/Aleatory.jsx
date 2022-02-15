import React from "react";

export default _ =>
    <>
        <h2>Número aleatório</h2>
        <p>Valor minímo: {_.min}</p>
        <p>Valor máximo: {_.max}</p>
        <p>Valor aleatório: {parseInt(Math.random() * _.max - _.min)}</p>
    </>