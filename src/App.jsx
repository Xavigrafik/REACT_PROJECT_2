// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './css/App.css'

import {Component1} from './components/Component1'
import {Component2} from './components/Component2'
import {ComponentEvento} from './components/ComponentEvento'
import {Condicionales} from './components/Condicionales'

function App() {

  return (
    <>
      <Condicionales></Condicionales>

      <ComponentEvento value = {10} ></ComponentEvento>

      <Component1></Component1>

      <Component2 ></Component2>
      <Component2 titulo="titulo from App.jsX"></Component2>



      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
