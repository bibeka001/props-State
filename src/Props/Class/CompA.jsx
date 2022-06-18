import React, { Component } from 'react'
import CompB from '../Class/CompB'

export class CompA extends Component {
  render() {
      let sname= "Rahul Gandhi"
    return (
      <div>
     <h1>Class Component A</h1>
     <hr />
     <CompB name={"Bibeka"} age= {"28"} qualification={"BTech" } sname={sname}/> 
      </div>
    )
  }
}

export default CompA