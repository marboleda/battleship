import Player from './Player';
import Gameboard from './Gameboard';
import Ship from './Ship';

const game = () => {

    const player = Player('human');
    const playerGameboard = Gameboard();
    const enemyGameboard = Gameboard();

    //hard code enemy ship's placement to start, implement a random placement later
    const carrier = Ship('carrier', [0,0], 0);
    const battleship = Ship('battleship', [4,3], 1);
    const cruiser = Ship('cruiser', [3,9], 0);
    const submarine = Ship('submarine', [9,3], 0);
    const destroyer = Ship('destroyer', [6,1], 0);

    enemyGameboard.placeShip(carrier);
    enemyGameboard.placeShip(battleship);
    enemyGameboard.placeShip(cruiser);
    enemyGameboard.placeShip(submarine);
    enemyGameboard.placeShip(destroyer);

    console.log(enemyGameboard.getGameboardState());

    const getPlayerGameboard = () => {
        return playerGameboard;
    }

    const getEnemyGameboard = () => {
        return enemyGameboard;
    }

    const initGame = () => {

    }

    return { getPlayerGameboard, getEnemyGameboard}
}

export default game;