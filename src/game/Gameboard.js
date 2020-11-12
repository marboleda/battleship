import Ship from './Ship';

const gameBoard = () => {

    const gameBoardState = [...Array(8)].map(() => Array(8).fill(0));
    // 0 indicates unfilled, 1 indicates filled with ship (not hit), 2 indicates hit with ship, 3 indicates hit without ship
    const ships = [];

    const placeShip = (ship) => {
        const xCoord = ship.getPlacementCoordinates()[0];
        const yCoord = ship.getPlacementCoordinates()[1];
        const orientation = ship.getOrientation();

        if (orientation === 0) {
            if (ship.getLength() + xCoord > 7) {
                console.log('Ship goes off the grid');
                return null;
            }
            for (let i = 0; i < ship.getLength(); i++) {
                if (gameBoardState[yCoord][xCoord+i] == 1) {
                    console.log('Something is in the way of the ship');
                    return null;
                }
            }
        } else { //i.e. ship orientation is 1, or vertical
            if (ship.getLength() + yCoord > 7) {
                console.log('Ship goes off the grid');
                return null;
            }
            for (let i = 0; i < ship.getLength(); i++) {
                if (gameBoardState[yCoord+i][xCoord] == 1) {
                    console.log('Something is in the way of the ship');
                    return null;
                }
            }
        }
        
        //If ship placement is valid
        const coordinatesOccupiedByShip = [];

        if (orientation === 0) {
            for (let i = 0; i < ship.getLength(); i++) {
                gameBoardState[yCoord][xCoord+i] = 1;
                coordinatesOccupiedByShip.push([xCoord+i, yCoord]);
            }
        } else {
            for (let i = 0; i < ship.getLength(); i++) {
                gameBoardState[yCoord+i][xCoord] = 1;
                coordinatesOccupiedByShip.push([xCoord, yCoord+i]);
            }           
        }

        ship.setCoordinatesOccupied(coordinatesOccupiedByShip);
        ships.push(ship);
    }

    
    const getGameboardState = () => {
        return gameBoardState;
    }

    const getShips = () => {
        return ships;
    }

    return { getGameboardState, placeShip, getShips }
}

export default gameBoard;