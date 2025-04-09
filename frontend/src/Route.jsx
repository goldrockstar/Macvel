import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'  



import Landing from './Pages/Landing'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import ServicesDetails from './Pages/ServicesDetails'

const route = () => {
  return (
    <div>
        <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Landing/>}></Route>
            <Route path='/about' element ={<About/>}></Route>
            <Route path='/service' element ={<Services/>}></Route>
            <Route path='/contact' element ={<Contact/>}></Route>
            <Route path='servicesdetails' element ={<ServicesDetails/>}></Route>
        </Routes>
         </BrowserRouter>
         <Footer></Footer>
        

    </div>
  )
}

export default route