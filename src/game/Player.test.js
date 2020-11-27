import Gameboard from './Gameboard';
import Player from './Player';
import Ship from './Ship';

describe('Test attackEnemy function', () => {

    test('Test player attacking empty enemy board', () => {
        const testGameboard = Gameboard();
        const humanPlayer = Player('human');
        humanPlayer.attackEnemy(testGameboard, [2,3]);
        expect(testGameboard.getGameboardState()).toEqual([[0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,3,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0,0,0]]);       
    });

});