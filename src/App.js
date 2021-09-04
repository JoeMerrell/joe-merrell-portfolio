import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';


function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
        <Gallery></Gallery>
      </main>
    </div>
  );
}

export default App;
