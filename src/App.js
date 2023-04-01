import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Viewproj1 from './pages/mokeup/Viewproj1'
import Home from './pages/Home'
import Project from './pages/Project'
import Viewproj2 from './pages/mokeup/Viewproj2'
import Pengaduan from './pages/mokeup/Pengaduan'
import Viewproj3 from './pages/mokeup/Viewproj3';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      {/* daftar project */}
      <Route path='/project/Form-login' element={<Viewproj1/>} />
      <Route path='/project/landing-page' element={<Viewproj2/>} />
      <Route path='/project/pengaduan' element={<Pengaduan/>} />
      <Route path='/project/dashboard-admin' element={<Viewproj3/>} />
    </Routes>
  )
}

export default App