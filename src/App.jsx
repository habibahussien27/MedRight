import './style.css'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import  Features  from './components/Features'
import About from './components/About'
import { Services } from './components/Services'

function App() {

  return (
    <>
      <Header />
      <Hero/>
      <Features/>
      <About/>
      <Services/>
    </>
  )
}

export default App
