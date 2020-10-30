import Ship from './Ship';

const gameBoard = () => {

    const gameBoardState = [...Array(8)].map(() => Array(8).fill(0));
    // 0 indicates unfilled, 1 indicates filled with ship (not hit), 2 indicates hit
    const ships = [];

    const placeShip = (ship) => {
        const xCoord = ship.getCoordinates()[0];
        const yCoord = ship.getCoordinate()[1];
        const orientation = ship.getOrientation();

        if (orientation === 0) {
            if (ship.getLength() + ship.xCoord > 7) {
                console.log('Ship goes off the grid');
                return;
            }
            for (let i = 0; i < ship.getLength(); i++) {
                if (gameBoardState[yCoord][xCoord+i] == 1) {
                    console.log('Something is in the way of the ship');
                    return;
                }
            }
        } else { //i.e. ship orientation is 1, or vertical
            if (ship.getLength() + ship.yCoord > 7) {
                console.log('Ship goes off the grid');
                return;
            }
            for (let i = 0; i < ship.getLength(); i++) {
                if (gameBoardState[yCoord+i][xCoord] == 1) {
                    console.log('Something is in the way of the ship');
                    return;
                }
            }
        }
        
        ships.push(ship);
        if (orientation === 0) {
            for (let i = 0; i < ship.getLength(); i++) {
                gameBoardState[yCoord][xCoord+i] = 1;
            }
        } else {
            for (let i = 0; i < ship.getLength(); i++) {
                gameBoardState[yCoord+i][xCoord] = 1;
            }           
        }
    }

    return { gameBoardState, placeShip }
}

export default gameBoard;