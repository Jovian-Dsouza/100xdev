import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title1, setTitle1] = useState("jovian")

  return (
    <>
      <button onClick={()=> {setTitle1(Math.random())} }>Update title</button>
      <Header title={title1} />
      <Header title="jovian2" />
    </>
  );
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
