import React, { useEffect } from 'react'
import Navbar from './compoents/Navbar'
import Home from './compoents/Home'
import Exprience from './compoents/Exprience'
import Skills from './compoents/Skills'
import Project from './compoents/Project'
import Contact from './compoents/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  useEffect(()=>{
    Aos.init();
  },[] )
  return (
    <>
     <Navbar/>
     <Home/>
     <Exprience/>
     <Skills/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
