import './App.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About';
import CarouselComponent from './components/CarouselComponent';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Student';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App =() => {
  return (
    <>
      <Navbar />
      <Home />
      <CarouselComponent />
      <About />
      <Academics />
      <Admissions />
      <Faculty />
      <Students />
      <Gallery />
      <Contact /> 
      <Footer />
    
  </>
  )
}

export default App


 
