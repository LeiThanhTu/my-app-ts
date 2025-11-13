import React from 'react'
import type { FC } from 'react';
import './App.css'
import { Person } from './Components/Person';

const App: FC = () => {
   
  return (

      <div className="App">
        <Person name="tutu" age={20} email="abc@mail.com"  />
        </div>
       
  )
}

export default App
