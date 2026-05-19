
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
// import Services from './components/Services'


function App() {

  return (
    <>
     <Header/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Education/>
     {/* <Services/> */}
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
