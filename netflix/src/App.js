import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action, originals, comedy} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>   {/* isSmall={true} is similar */}
      <RowPost url={comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
