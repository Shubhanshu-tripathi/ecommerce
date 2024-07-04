import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Component/headers/Header'
import Page from './Component/mainpages/Page'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
       
      <GlobalProvider>
      <BrowserRouter>
      <div className='App' >
      <Header/>
       <Page/>
        </div>
      </BrowserRouter>
        </GlobalProvider>
    </>
  )
}

export default App
