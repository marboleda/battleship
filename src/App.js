import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';
import Gameboard from './game/Gameboard';
import Game from './game/Game';
import Ship from './game/Ship';
import styled from 'styled-components';
const _ = require('lodash');

const GameComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  margin: 0 auto;
`;


const App = () => {

  const [game, setGame] = useState(Game());
  const [selectedShipType, setSelectedShipType] = useState('');
  const [currentShipId, setCurrentShipId] = useState(0);
  const [shipOrientations, setShipOrientations] = useState(Array(5).fill(0));
  const [shipPlaced, setShipPlaced] = useState(Array(5).fill(false));
  const [playerGameboard, setPlayerGameboard] = useState(game.getPlayerGameboard());
  const [playerGameboardState, setPlayerGameboardState] = useState(playerGameboard.getGameboardState());
  const [computerGameboard, setComputerGameboard] = useState(game.getEnemyGameboard());
  const [computerGameboardState, setComputerGameboardState] = useState(computerGameboard.getGameboardState());

  const handleDragShip = (shipType, shipId) => {
    setSelectedShipType(shipType);
    setCurrentShipId(shipId);
  }

  const handleDropShip = (playerType, coordinates, shipId) => {
    let updatedGameboard;
    let updatedShipsPlacedArray;
    const ship = Ship(selectedShipType, coordinates, shipOrientations[shipId]);

    if (playerType === 'h' && shipPlaced[shipId] === false) {
      updatedGameboard = _.cloneDeep(playerGameboard);
      updatedShipsPlacedArray = [...shipPlaced];
      updatedGameboard.placeShip(ship);
      updatedShipsPlacedArray[shipId] = true;
      setPlayerGameboard(updatedGameboard);
      setPlayerGameboardState(playerGameboard.getGameboardState());
      setShipPlaced(updatedShipsPlacedArray);
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
      <GameComponent id="game">
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
          shipOnPlayerBoard={shipPlaced}
        />
        <Grid 
          playerType="c"
          drop={handleDropShip}
          gameboard={computerGameboardState}
          currentShipId={currentShipId}
        />
      </GameComponent>
    </div>
  );
}

export default App;
