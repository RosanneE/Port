import './App.css';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Header from './components/Header';
import Nav from './components/Nav'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


{/* <Header/>
<Nav/>
<div className = "pageSections">
  <Home/>
  <About/>
  <br/>
  <br/>
  <Skills/>
  <br/>
  <br/>
  <Projects/>
  <br/>
  <br/>
</div>
<Footer/> */}