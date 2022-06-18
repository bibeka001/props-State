import React from 'react'

const StateFunction = () => {
    let message= "Hello";
  const   msgHandler= () =>{
      console.log("I am clicked");
      let message= "Hello Good MOrning"
      forceUpdate()
  } 
  return (
    <>
    <h2>State Component A</h2>
    <hr />
    <h1>Message: {message}</h1>
    <button onClick={msgHandler}>click Me</button>
    
    </>
  )
}

export default StateFunction