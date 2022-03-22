import React from 'react';
import Header from '../components/Header/Header';
import './App.css';
import logo from './logo.png'
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
