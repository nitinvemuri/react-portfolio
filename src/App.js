import React from 'react'
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <div>

    <main>
      <div className = "About">
      <About></About>
      </div>
      <div className = "Work">

      </div>
      <div className='Contact'>
        <ContactForm></ContactForm>

      </div>
    </main>
    </div>
  );
}

export default App;
