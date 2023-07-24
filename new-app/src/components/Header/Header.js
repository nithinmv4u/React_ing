import React from 'react'

function Header(props){
    return(
        <>
            <h2>Seamless coding</h2>
            <h5>What is your interesting topic?</h5>
            <p>1.{props.topic}</p>
        </>
        
    )
}

export default Header