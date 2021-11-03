import React, { useState } from "react";
import { Badge } from "react-bootstrap";

export default function Transfer({ currency }) {
  const [value, setValue] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState(currency[0]?.rate);
  const [result, setResult] = useState(0);

  return (
    <div className="transfer__component">
      <h1>
        <Badge bg="secondary">Конвертер валюты</Badge>
      </h1>
      <div className="transfer__component__body">
        <div className="transfer__component__variable">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value))
            }}
          />
          <select
            onChange={(e) => {
              setSelectedCurrency(parseFloat(e.target.value));
              setResult(selectedCurrency * value);
            }}
          >
            {currency &&
              currency.map((el) => {
                return (
                  <option key={el.r030} value={el.rate}>
                    {el.cc}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="result">{result} UAH</div>
      </div>
    </div>
  );
}
