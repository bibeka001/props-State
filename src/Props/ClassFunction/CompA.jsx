import React, {Component} from "react"
import CompB from "../ClassFunction/CompB";
class CompA extends Component{
    render(){
        return (
            <>
                <h1>Class Component A</h1>
                <hr />
                <CompB name={"Rohit"} age= {"28"} qualification={"BTech"} />
            </>
        )
    }
}

export default CompA;