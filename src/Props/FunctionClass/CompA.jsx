import react from "react";
import CompB from "../FunctionClass/CompB";
const CompA = () => {
    return (
        <>
            <h1>Functional Component A</h1>
            <hr />
            <CompB name={"Ajith"} profession={"Acting"} salary={"400000"}/>
        </>
    )
}

export default CompA;