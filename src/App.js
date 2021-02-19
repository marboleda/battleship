import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';
import Gameboard from './game/Gameboard'
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

  const generateRandomEnemyGameboard = () => {
    let randomEnemyGameboard = Gameboard();
    let randomCoords = [0, 0];
    let randomOrientation = 0;
    let validPlacement = false;

    [...Array(5).keys()].forEach((index) => {
      while (!validPlacement) {
        randomCoords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        randomOrientation = Math.round(Math.random()) //Generate 0 or 1
        if (index === 0) {
          if (randomEnemyGameboard.placeShip(Ship('carrier', randomCoords, randomOrientation)) !== null) {
            validPlacement = true;
          }
        } else if (index === 1) {
          if (randomEnemyGameboard.placeShip(Ship('battleship', randomCoords, randomOrientation)) !== null) {
            validPlacement = true;
          }
        } else if (index === 2) {
          if (randomEnemyGameboard.placeShip(Ship('cruiser', randomCoords, randomOrientation)) !== null) {
            validPlacement = true;
          }
        } else if (index === 3) {
          if (randomEnemyGameboard.placeShip(Ship('submarine', randomCoords, randomOrientation)) !== null) {
            validPlacement = true;
          }
        } else { //index must be 4
          if (randomEnemyGameboard.placeShip(Ship('destroyer', randomCoords, randomOrientation)) !== null) {
            validPlacement = true;
          }
        }
      }
      validPlacement = false;
    });

    return randomEnemyGameboard;
  }

  const [selectedShipType, setSelectedShipType] = useState('');
  const [currentShipId, setCurrentShipId] = useState(0);
  const [shipOrientations, setShipOrientations] = useState(Array(5).fill(0));
  const [selectedCellId, setSelectedCellId] = useState(0);
  const [shipPlaced, setShipPlaced] = useState(Array(5).fill(false));
  const [playerGameboard, setPlayerGameboard] = useState(Gameboard());
  const [playerGameboardState, setPlayerGameboardState] = useState(playerGameboard.getGameboardState());
  const [computerGameboard, setComputerGameboard] = useState(generateRandomEnemyGameboard());
  const [computerGameboardState, setComputerGameboardState] = useState(computerGameboard.getGameboardState());
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);


  const handleDragShip = (shipType, shipId) => {
    setSelectedShipType(shipType);
    setCurrentShipId(shipId);
  }

  const handleDropShip = (playerType, coordinates, shipId, cellID) => {
    let updatedGameboard;
    let updatedShipsPlacedArray;

    const ship = Ship(selectedShipType, coordinates, shipOrientations[shipId]);

    if (playerType === 'h' && shipPlaced[shipId] === false) {
      updatedGameboard = _.cloneDeep(playerGameboard);
      updatedShipsPlacedArray = [...shipPlaced];
      if (updatedGameboard.placeShip(ship) !== null) {
        updatedShipsPlacedArray[shipId] = true;
        setShipPlaced(updatedShipsPlacedArray);
      };
      setPlayerGameboard(updatedGameboard);
      setPlayerGameboardState(playerGameboard.getGameboardState());
      setIsPlayerTurn(updatedShipsPlacedArray.every((placed) => {return placed === true }))
    } 
    //We are not supposed to be dropping ships on the computer's grid, so no else statement

    setSelectedShipType('');

  }

  const handleClickShip = (shipId, newOrientation) => {
    const updatedOrientations = [...shipOrientations];
    updatedOrientations[shipId] = newOrientation;
    setShipOrientations(updatedOrientations);
  }

  const handleClickCell = (cellId) => {
    setSelectedCellId(cellId);
  }

  const takeComputerTurn = () => {
    let move = Math.floor(Math.random() * 100);
    let moveX = (move % 10);
    let moveY = (move < 10) ? 0 : Number(move.toString().substring(0,1));
    const newPlayerGameboard = _.cloneDeep(playerGameboard);
    let attackIsValid = newPlayerGameboard.receiveAttack([moveX, moveY]);
    while (!attackIsValid) {
      move = Math.floor(Math.random() * 100);
      moveX = (move % 10);    
      moveY = (move < 10) ? 0 : Number(move.toString().substring(0,1)); 
      attackIsValid = newPlayerGameboard.receiveAttack([moveX, moveY]);
    }
    if (newPlayerGameboard.allShipsAreSunk()) {
      //end game
      setIsGameOver(true);
    } else {
      setIsPlayerTurn(true);
    }
  }

  const handleClickEnemyGrid = (coordinates, gridType, isPlayerTurn) => {
    if (isPlayerTurn && gridType === 'c') {
      const newComputerGameboard = _.cloneDeep(computerGameboard);
      const attackIsValid = newComputerGameboard.receiveAttack(coordinates);
      if (attackIsValid) {
        setComputerGameboard(newComputerGameboard);
        setComputerGameboardState(newComputerGameboard.getGameboardState());
        setIsPlayerTurn(false);
        if (newComputerGameboard.allShipsAreSunk()) {
          //end game
          setIsGameOver(true);
        } else {
          takeComputerTurn();
        }
      }
    }
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
          isPlayerTurn={isPlayerTurn}
          isGameOver={isGameOver}
          clickEnemyGrid={handleClickEnemyGrid}
        />
        <Menu 
          drag={handleDragShip}
          orientations={shipOrientations}
          clickShip={handleClickShip}
          clickCell={handleClickCell}
          shipOnPlayerBoard={shipPlaced}
        />
        <Grid 
          playerType="c"
          drop={handleDropShip}
          gameboard={computerGameboardState}
          currentShipId={currentShipId}
          isPlayerTurn={isPlayerTurn}
          isGameOver={isGameOver}
          clickEnemyGrid={handleClickEnemyGrid}
        />
      </GameComponent>
    </div>
  );
}

export default App;
