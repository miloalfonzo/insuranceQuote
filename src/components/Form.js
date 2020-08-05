import React, { useState } from "react";
import styled from "styled-components";
import { getDifYear, calcBrand, getPlan } from "../helper";

const ContCamp = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.5s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

function Form({setSummary}) {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: ""
  });
  const [error, setError] = useState(false);

  const { brand, year, plan } = data;

  const getInfo = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim === "") {
      setError(true);
      return;
    }
    setError(false);

    let result = 2000;

    //get difference betweeen years

    const difference = getDifYear(year);

    // console.log(difference);

    //each year is 3% cheaper

    result -= ((difference * 3) * result) / 100;

    result = calcBrand(brand) * result;

    // console.log(result);

    const incPlan = getPlan(plan);
    result = parseFloat( incPlan * result ).toFixed(2);

    setSummary({
      quotation: result,
      data
    })

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}
        <ContCamp>
          <Label>Marca</Label>
          <Select name="brand" value={brand} onChange={getInfo}>
            <option value="">--Selecciones --</option>
            <option value="american">Americano</option>
            <option value="european">Europeo</option>
            <option value="asian">Asiatico</option>
          </Select>
        </ContCamp>
        <ContCamp>
          <Label>Año</Label>
          <Select name="year" value={year} onChange={getInfo}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </ContCamp>
        <ContCamp>
          <Label>Plan</Label>
          <InputRadio
            type="radio"
            name="plan"
            value="basic"
            checked={plan === "basic"}
            onChange={getInfo}
          />
          Básico
          <InputRadio
            type="radio"
            name="plan"
            value="full"
            checked={plan === "full"}
            onChange={getInfo}
          />
          Completo
        </ContCamp>
        <Button type="submit">Cotizar</Button>
      </form>
    </div>
  );
}

export default Form;
