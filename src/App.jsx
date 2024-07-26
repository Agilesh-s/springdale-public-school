import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Student';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
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
