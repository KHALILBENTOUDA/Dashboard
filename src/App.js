import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import DashboardPage from './Pages/DashboardPage'
import './index.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardPage/>}
        />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
