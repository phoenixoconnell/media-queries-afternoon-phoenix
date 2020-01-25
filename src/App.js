import React from 'react';
import image from './header-bg.jpg';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={image} className="background" alt="background" />
      </header> */}
      <Header />
    </div>
  );
}

export default App;
