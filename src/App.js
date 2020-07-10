import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import MainGrid from './Components/MainGrid';
import BottomNavBar from './Components/BottomNavBar';

function App() {
  const screenSwap = useState();
  return (
    <div>
      <Header />
      <BottomNavBar screenSwap = {screenSwap}/>
      <MainGrid currentScreen = {screenSwap[0]} />

    </div>
  );
}

export default App;
