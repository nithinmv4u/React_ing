import React from 'react'
import ReactDOM from 'react-dom/client';

const heading =  React.createElement("h1", {
    id : "title",
    style: { color:"red" }
}, "Basic React"); 
console.log(heading);

const heading2 =  React.createElement("h1", {
    id : "title",
    style: { color:"red" }
}, "Training"); 
console.log(heading2);

const container = React.createElement("div", {
    id: "container",
}, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)