import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import MainGrid from './Components/MainGrid';
import BottomNavBar from './Components/BottomNavBar';
import CountryForm from './Components/CountryForm'


function App() {
  const screenSwap = useState();
  return (
    <div>
      <Header />
      <MainGrid currentScreen = {screenSwap[0]} />
      <BottomNavBar screenSwap = {screenSwap}/>
      <CountryForm/>
    </div>
  );
}

export default App;
