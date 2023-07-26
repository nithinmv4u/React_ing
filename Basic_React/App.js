import React from 'react'
import ReactDOM from 'react-dom/client';

//  writing below code is not good for big pages and hence we have JSX
// const heading =  React.createElement("h1", {
//     id : "title",
//     key: "h1", 
//     style: { color:"red" }
// }, "Basic React"); 
// console.log(heading);

// const heading2 =  React.createElement("h1", {
//     id : "title",
//     key: "h2",
//     style: { color:"red" }
// }, "Training"); 
// console.log(heading2);

// JSX

//React Element
const heading3 = (
    <h2 id="title" key="h3">
        JSX Start -React Element
    </h2>
)

const Title = () => {
    return (
        <h1>
            Intro React
        </h1>
    )
}

const HeaderComponent = () => {
    return (
        <div>
            <Title/>
            {/* {Title()} Because it's a normal function*/}
            {heading3}
            <h2>React functional Component</h2>
            <h3>Get Started</h3>
        </div>
    )
}

// const container = React.createElement("div", {
//     id: "container",
// }, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)
root.render(<HeaderComponent/>);