
import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Aboutpage from './components/Aboutpage.jsx';
import Servicedetails from './components/Servicedetails.jsx';
import Allprojects from './components/Allprojects.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import PureCounter from './components/PureCounter.jsx';
import PureCounterYoE from './components/PureCounterYoE.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
    <PureCounter  />
    <ScrollToTop  />
    <PureCounterYoE  />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/ About" element={<Aboutpage/>}/>
        <Route path="/ Services" element={<Servicedetails/>}/>
        <Route path="/ Projects" element={<Allprojects/>}/>
        <Route path="/ Contact" element={<Contact/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;