import React from 'react'

// function Greet(){
//     return <h1> Hello Richa </h1>
// }

const Greet = props =>{
    const {name, heroname} = props
    console.log(props)
    return (
    <div>
        <h1> Hello {name} a.k.a. {heroname} </h1>
        {props.children}
    </div>
    )
}


export default Greet 