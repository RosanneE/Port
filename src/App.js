import './App.css';
import React from 'react';
import Home from './pages/Resume';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
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
        <Route path='/' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
