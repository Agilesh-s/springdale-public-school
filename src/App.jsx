import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Academics />
      <Admissions />
    </>
  )
}

export default App
