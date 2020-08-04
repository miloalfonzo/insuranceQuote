import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const Text = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

function Header({ title }) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}

export default Header;
