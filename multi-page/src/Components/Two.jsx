import React, {useContext} from 'react'
import { AppContext } from '../AppContext'

function Two(props) {
    const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'red', width:'70%', height:'70%'}}>
        <h1>Layer Two</h1>
        <p>{data}</p>
    </div>
  )
}

export default Two