// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Counter from './components/Counter/Counter'
import Employee from './components/Employee/Employee'
import CounterEffect from './components/CounterEffect/CounterEffect'

function App() {
  
  const data='how are you?'
  const topic='React'

  let obj ={
    title:'2nd Counter',
    // count,
    // addCount,
    // minsCount
  }

  return (
    <div>
      {/* <h1 style={{color:'red'}}>Hello World</h1> */}
      <Header topic={topic}/>
      {/* <p className='hello'>This is simple project. {data}</p> */}
      <Counter title='1st Counter'/>
      <Counter {...obj}/>
      <Employee />
      <CounterEffect/>
    </div>   

  );
}

export default App;
