import React from 'react';
import styled from 'styled-components';

const ConSum = styled.div`
    padding:1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffff;
    margin-top: 1rem;

    li{
        text-transform: uppercase;
    }
`

function Summary({data}){

    const {brand, year, plan} = data;

    if (brand === '' || year === ''  || plan === '') return null;

    return(
        <ConSum>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca:{brand} </li>
                <li>Plan: {plan} </li>
                <li>Año: {year}</li>
            </ul>
        </ConSum>
    ); 
}

export default Summary;