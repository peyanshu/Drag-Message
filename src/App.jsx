import React from 'react'
import Backgrounds from './Components/Backgrounds'
import Foreground from './Components/Foreground';


const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Backgrounds/>
      <Foreground/>
           
    </div>
  )
}

export default App;