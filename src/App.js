import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";


const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const ContForm = styled.div`
  background-color: #ffff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = useState({
    quotation: 0,
     data: {
       brand: '',
       year: '',
       plan: ''
     }
  });

  const {data} = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <ContForm>
        <Form setSummary={setSummary} />
       <Summary 
       data={data} />
      </ContForm>
    </Container>
  );
}

export default App;
