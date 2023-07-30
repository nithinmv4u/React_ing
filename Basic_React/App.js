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
const StyleObj = {
    backgroundColor:"red",
}

const heading3 = (
    //inline styling in react
    <h2 style={StyleObj} id="title" key="h3">
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

const Logo = () => {
    return (
        <img className='image' src={require("./assets/droplet_4007761.png")} alt="Logo" />
    )
}

const SearchBar = () => {
    return (
        <div className='search'>
            <input className='search_img' type="text" placeholder='Search' />
            <span class="material-symbols-outlined">search</span>
        </div>

    )
}

const UserIcon = () => {
    return (
        <img className='user_icon' src={require("./assets/user_1177568.png")} alt="" />
    )
}

const HeaderComponent = () => {     
    return (
        <div className='header'>
            <Logo/>
            <SearchBar/>
            <UserIcon/>
            {/* <Title/> */}
            
            {/* {Title()} Because it's a normal function*/}
            {/* {heading3}
            <h2>React functional Component</h2>
            <h3>Get Started</h3> */}
        </div>
    )
}

const RestaurantList = () => {
    return (
        <div className='card'>
            <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y" alt="image" />
            <h2>Name</h2>
            <h5>Indian, american</h5>
            <h6>Distance</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurant-list'>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
            <RestaurantList/>
        </div>

    )
}

const App = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Body/>
        </React.Fragment>
        
    )
}

// const container = React.createElement("div", {
//     id: "container",
// }, [heading, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)
root.render(<App/>);