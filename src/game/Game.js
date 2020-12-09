import Player from './Player';
import Gameboard from './Gameboard';

const game = () => {

    const player = new Player("human");
    const playerGameboard = new Gameboard();
    const enemyGameboard = new Gameboard();

    const getPlayerGameboard = () => {
        return playerGameboard;
    }

    const getEnemyGameboard = () => {
        return enemyGameboard;
    }

    return { getPlayerGameboard, getEnemyGameboard}
}

export default game;