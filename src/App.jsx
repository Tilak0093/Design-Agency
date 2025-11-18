import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Provide from './components/Provide/Provide'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'

function App() {

  return (
    <>
     <Navbar/>
     <Herosection/>
     <Provide/>
     <Portfolio/>
     <Testimonial/>
     <SubscribeSection/>
     <Footer/>
    </>
  )
}

export default App
