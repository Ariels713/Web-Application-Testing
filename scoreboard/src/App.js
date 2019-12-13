import React from "react";
import { Container } from "semantic-ui-react";

//data

//components
import AtBat from './components/AtBat'

function App() {
  return (
    <Container
      style={{
        margin: "10% auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <AtBat />
    </Container>
  );
}

export default App;
