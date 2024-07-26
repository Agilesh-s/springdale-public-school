import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Student';

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
    </>
  )
}

export default App
