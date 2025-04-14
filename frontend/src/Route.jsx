import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'  



import Landing from './Pages/Landing'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Training from './Pages/Training'
import Servicedetail from './Pages/Servicedetail'
import RegistrationForm from './Pages/RegistrationForm'

const route = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element ={<Landing/>}></Route>
            <Route path='/about' element ={<About/>}></Route>
            <Route path='/service' element ={<Services/>}></Route>
            <Route path='/contact' element ={<Contact/>}></Route>
            <Route path='/trainingprogrames' element ={<Training/>}></Route>
            <Route path='/servicedetail' element={<Servicedetail/>}></Route>
            <Route path='/register/' element={<RegistrationForm/>}></Route>
        </Routes>
         <Footer></Footer>
        

    </div>
  )
}

export default route