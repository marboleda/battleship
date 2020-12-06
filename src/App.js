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

  const [selectedShipType, setSelectedShipType] = useState('');
  const [currentShipId, setCurrentShipId] = useState(0);
  const [shipOrientations, setShipOrientations] = useState([0,0,0,0,0]);
  const [playerGameboard, setPlayerGameboard] = useState(Gameboard());
  const [playerGameboardState, setPlayerGameboardState] = useState(playerGameboard.getGameboardState());
  const [computerGameboard, setComputerGameboard] = useState(Gameboard());
  const [computerGameboardState, setComputerGameboardState] = useState(computerGameboard.getGameboardState());

  const handleDragShip = (shipType, shipId) => {
    setSelectedShipType(shipType);
    setCurrentShipId(shipId);
  }

  const handleDropShip = (playerType, coordinates, shipId) => {
    let updatedGameboard;
    const ship = Ship(selectedShipType, coordinates, shipOrientations[shipId]);

    if (playerType === 'h') {
      updatedGameboard = _.cloneDeep(playerGameboard);
      updatedGameboard.placeShip(ship);
      setPlayerGameboard(updatedGameboard);
      setPlayerGameboardState(playerGameboard.getGameboardState());
      console.log(playerGameboard.getGameboardState());
    } 
    //We are not supposed to be dropping ships on the computer's grid, so no else statement

    setSelectedShipType('');
  }

  const handleClickShip = (shipId, newOrientation) => {
    const updatedOrientations = [...shipOrientations];
    updatedOrientations[shipId] = newOrientation;
    setShipOrientations(updatedOrientations);
  }

  return (
    <div className="App">
      <h1>Battleship</h1>
      <Game id="game">
        <Grid 
          playerType="h"
          drop={handleDropShip}
          gameboard={playerGameboardState}
          currentShipId={currentShipId}
        />
        <Menu 
          drag={handleDragShip}
          orientations={shipOrientations}
          clickShip={handleClickShip}
        />
        <Grid 
          playerType="c"
          drop={handleDropShip}
          gameboard={computerGameboardState}
          currentShipId={currentShipId}
        />
      </Game>
    </div>
  );
}

export default App;
