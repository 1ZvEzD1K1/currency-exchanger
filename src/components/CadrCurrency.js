import React from "react";
import { Card } from "react-bootstrap";

export default function CadrCurrency({ el }) {
  console.log();

  return (
      <Card bg="light" key={el.r030} className="mb-2" style={{ width: '16rem' }}>
        <Card.Header>{el.txt}</Card.Header>
        <Card.Body>
          <Card.Text>Укороченое обозначение: {el.cc}</Card.Text>
          <Card.Text>Ставка UAH: {el.rate}</Card.Text>
        </Card.Body>
      </Card>
  );
}
