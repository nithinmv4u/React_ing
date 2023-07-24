import About from "./Container/About";
import Profile from "./Container/Profile";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function App() {
  const [state, setState] = useState(10)
  // let component;
  // if(state==='about'){
  //   component=<About/>
  // }
  // else if(state==='profile'){
  //   component=<Profile/>
  // }
  return (
    <div className="App">
      {/* <button onClick={() => setState('about')}>About</button>
      <button onClick={() => setState('profile')}>Profile</button> */}
      {/* {component} */}
      <Router>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/hello'>Hello</Link>
        <AppContext.Provider value={{data:state}}>
          <Routes>
            <Route Component={About} path='/about' />
            <Route Component={Profile} path='/profile' />
            {/* <Route path="/profile" element={<Profile data={state} ></Profile>}></Route> */}
            <Route Component={() =>  <h1>Hello</h1>} path='/hello' />
          </Routes>
        </AppContext.Provider>

      </Router>
    </div>

  )
}


export default App;
