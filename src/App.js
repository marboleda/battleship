import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';
import Gameboard from './game/Gameboard';
import Ship from './game/Ship';
import styled from 'styled-components';
const _ = require('lodash');

const Game = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  margin: 0 auto;
`;


const App = () => {

  const [selectedShip, setSelectedShip] = useState('');
  const [shipOrientation, setShipOrientation] = useState(0);
  const [playerGameboard, setPlayerGameboard] = useState(Gameboard());
  const [playerGameboardState, setPlayerGameboardState] = useState(playerGameboard.getGameboardState());
  const [computerGameboard, setComputerGameboard] = useState(Gameboard());
  const [computerGameboardState, setComputerGameboardState] = useState(computerGameboard.getGameboardState());

  const handleDragShip = (shipType) => {
    setSelectedShip(shipType);
  }

  const handleDropShip = (playerType, coordinates) => {
    let updatedGameboard;
    const ship = Ship(selectedShip, coordinates, shipOrientation);

    if (playerType === 'h') {
      updatedGameboard = _.cloneDeep(playerGameboard);
      updatedGameboard.placeShip(ship);
      setPlayerGameboard(updatedGameboard);
      setPlayerGameboardState(playerGameboard.getGameboardState());
      console.log(playerGameboard.getGameboardState());
    } 
    //We are not supposed to be dropping ships on the computer's grid, so no else statement

    setSelectedShip('');

  }

  return (
    <div className="App">
      <h1>Battleship</h1>
      <Game id="game">
        <Grid 
          playerType="h"
          drop={handleDropShip}
          gameboard={playerGameboardState}
        />
        <Menu 
          drag={handleDragShip}
        />
        <Grid 
          playerType="c"
          drop={handleDropShip}
          gameboard={computerGameboardState}
        />
      </Game>
    </div>
  );
}

export default App;
