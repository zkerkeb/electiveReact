import React from 'react';
import Header from './components/header';
import Counter from './components/counter';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <Header label="Vive la France" />
      <Counter />
    </div>
  );
}

export default App;
