import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Result from "./components/Result";

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

  const {quotation, data} = summary;

  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <ContForm>
        <Form setSummary={setSummary} />
       <Summary 
       data={data} />
       <Result 
        quotation={quotation}
       />
      </ContForm>
    </Container>
  );
}

export default App;
