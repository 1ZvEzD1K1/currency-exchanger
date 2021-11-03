import React from "react";
import CadrCurrency from "./CadrCurrency";

export default function Currency({ currency }) {

  return (
    <div className="currency__component">
      {currency && currency.map((el) => {
        return <CadrCurrency key={el.r030} el={el} />;
      })} 
    </div>
  );
}
