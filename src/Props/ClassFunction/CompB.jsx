import react from "react";
const CompB = (props) => {
  return (
    <>
      <h1>Functional Component B</h1>
      <hr />
      <pre>{JSON.stringify(props)}</pre>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.qualification}</h1>
    </>
  );
};

export default CompB;
