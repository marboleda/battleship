import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';
import styled from 'styled-components';

const Game = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  margin: 0 auto;
`;


const App = () => {

  const [selectedShip, setSelectedShip] = useState('');

  const handleDragShip = (shipType) => {
    setSelectedShip(shipType);
  }

  return (
    <div className="App">
      <h1>Battleship</h1>
      <Game id="game">
        <Grid playerType="h" />
        <Menu 
          drag={handleDragShip}
        />
        <Grid playerType="c" />
      </Game>
    </div>
  );
}

export default App;
