import React, { useState } from "react";
import { Button, Card, Image, Divider } from "semantic-ui-react";


export default function AtBat() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);

  const eventHandlerStrikes = () => {
    setStrikes(strikes + 1);
  };

  if(strikes > 3){
      setStrikes(0)
  }

  const eventHandlerBalls = () => {
    setBalls(balls + 1);
  };

  if(balls > 4){
      setBalls(0)
  }

  const eventHandlerOuts = () => {
    setOuts(outs + 1);
  };

  if(outs > 2){
      setOuts(0)
  }
  

  const clearForm = event => {
      event.preventDefault()
      setStrikes(0)
      setBalls(0)
  }

  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://i.ibb.co/x1HL61z/bear1.jpg"
        />
        <Card.Header>Ariel Rodriguez</Card.Header>
        <Card.Meta>Season Avg: .401</Card.Meta>
        <Card.Description>
          Fun Fact: Ariel doesn't like pizza or McDonalds
        </Card.Description>
      </Card.Content>
      <Divider fitted style={{ marginBottom: "1%" }} />
      <Button
        style={{ maxWidth: "90%", margin: "auto" }}
        onClick={eventHandlerStrikes}
      >
        Strikes
      </Button>
      <h1 style={{ fontSize: "3em", textAlign: "center" }}>{strikes}</h1>
      <Divider fitted style={{ marginBottom: "1%" }} />
      <Button
        style={{ maxWidth: "90%", margin: "auto" }}
        onClick={eventHandlerBalls}
      >
        Balls
      </Button>
      <h1 style={{ fontSize: "3em", textAlign: "center" }}>{balls}</h1>
      <Divider fitted style={{ marginBottom: "1%" }} />
      <Button
        style={{ maxWidth: "90%", margin: "auto" }}
        onClick={eventHandlerOuts}
      >
        Outs
      </Button>
      <h1 style={{ fontSize: "3em", textAlign: "center" }}>{outs}</h1>
      <Button
        style={{ maxWidth: "90%", margin: "auto", marginBottom:'2%' }}
        onClick={clearForm}
      >
        New Batter 
      </Button>
    </Card>
  );
}
