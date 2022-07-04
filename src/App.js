import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
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
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
