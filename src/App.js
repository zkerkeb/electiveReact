import React from 'react';
import Header from './components/header';

import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header label="Vive la France" />
      <Header />
      <Header />
      <Header />
    </div>
  );
}

export default App;
