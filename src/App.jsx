import { React, useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './app.css'

const App = () => {
  const [taskArray, setTaskArray] = useState([])

  return(
    <>
      <Header />
      <Main tasks={taskArray} setTaskArray={setTaskArray}/>
    </>
  )
}

export default App
