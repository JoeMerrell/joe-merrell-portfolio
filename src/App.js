import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Gallery',
      description: 'Models and images created using software including Cinema4D, Photoshop, and AfterEffects',
    },
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
        
      <main>

      {!contactSelected ? (
        <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
      ) : (
          <Contact></Contact>
        )}

      </main>
    </div>
  );
}

export default App;
