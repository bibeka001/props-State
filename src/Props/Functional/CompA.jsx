import React from "react";
import CompB from "../Functional/CompB";
const CompA = () => {
  return (
    <div>
      <h1>Component A</h1>
      <hr />
      <CompB name="Bibek" age= "28" qualification= "BTech" />
    </div>
  );
};

export default CompA;
