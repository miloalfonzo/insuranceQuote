import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";

const Container = styled.div`
  max-width: 600px;
  margin: auto;
`;

const ContForm = styled.div`
  background-color: #ffff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header title="Cotizador de seguros" />
      <ContForm>
        <Form />
      </ContForm>
    </Container>
  );
}

export default App;
