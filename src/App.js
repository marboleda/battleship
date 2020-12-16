import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Menu from './components/Menu';
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
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);


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
