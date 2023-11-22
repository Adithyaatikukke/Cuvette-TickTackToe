import {react} from 'react'
import './App.css'
import Mobilein from './Mobilein.jsx'
import Quote from './Quote.jsx'



function App(props) {

  return (
    <>
    <div className="mainContainer">
      <div className="mobile">
         <Mobilein/>
      </div>
      <Quote />
    </div>
    
    </>
  )
}

export default App
