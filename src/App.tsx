import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/Greeting';
import Song from './components/Songs/Song';
import SongList from './components/Songs/SongList';

function App() {
  return (
    <div>
    <Greeting name="Anna" age="25" />
    <SongList />
    
    </div>
    );
}

export default App;
