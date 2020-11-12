import Gameboard from './Gameboard';
import Ship from './Ship';

describe('Make sure gameboard initialized properly', () => {

    test('Check that length of main array and each array inside is 8', () => {
        const testGameboardState = Gameboard().getGameboardState();
        let arrayLengthIs8 = true;

        arrayLengthIs8 = (testGameboardState.length !== 8) ? false : arrayLengthIs8;

        testGameboardState.forEach((row) => {
            arrayLengthIs8 = (row.length !== 8) ? false : arrayLengthIs8
        });

        expect(arrayLengthIs8).toEqual(true);
    });

    test('Check that every cell in the grid is set to 0 (indicating not hit by opposing player)', () => {
        const testGameboardState = Gameboard().getGameboardState();

        let everyValueIs0 = true;

        testGameboardState.forEach((row) => {
            row.forEach((value) => {
                everyValueIs0 = (value !== 0) ? false : everyValueIs0;
            });
        });

        expect(everyValueIs0).toEqual(true);
    });

});


describe('Check that ship placement works correctly', () => {

    test('Check placing ship that goes off the board horizontally', () => {
        const testShip =  Ship('destroyer',[7,0], 0);
        const testGameboard = Gameboard();
        expect(testGameboard.placeShip(testShip)).toBeNull();
    });

    test('Check placing ship that goes off the board vertically', () => {
        const testShip =  Ship('destroyer',[0,7], 1);
        const testGameboard = Gameboard();
        expect(testGameboard.placeShip(testShip)).toBeNull();
    });

    test('Placing ship horizontally on valid spot on a blank board', () => {
        const testShip = Ship('carrier', [1, 2], 0);
        const testGameboard = Gameboard();
        testGameboard.placeShip(testShip);
        expect(testGameboard.getGameboardState()).toEqual([[0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,1,1,1,1,1,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0]]);
        expect(testGameboard.getShips()).toEqual([testShip]);
        expect(testShip.getCoordinatesOccupied()).toEqual([[1,2],[2,2],[3,2],[4,2],[5,2]])
    });

    test('Placing ship vertically on valid spot on a blank board', () => {
        const testShip = Ship('carrier', [0, 0], 1);
        const testGameboard = Gameboard();
        testGameboard.placeShip(testShip);
        expect(testGameboard.getGameboardState()).toEqual([[1,0,0,0,0,0,0,0],
                                                           [1,0,0,0,0,0,0,0],
                                                           [1,0,0,0,0,0,0,0],
                                                           [1,0,0,0,0,0,0,0],
                                                           [1,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0]]);
        expect(testGameboard.getShips()).toEqual([testShip]);
        expect(testShip.getCoordinatesOccupied()).toEqual([[0,0],[0,1],[0,2],[0,3],[0,4]]);
    });

});


describe('Check that gameboard receives attacks properly', () => {
    test('Place ship and successfully target it', () => {
        const testShip = Ship('carrier', [1, 2], 0);
        const testGameboard = Gameboard(); 
        testGameboard.placeShip(testShip);
        testGameboard.receiveAttack([2,2]);
        expect(testGameboard.getGameboardState()).toEqual([[0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,1,2,1,1,1,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0],
                                                           [0,0,0,0,0,0,0,0]]);
        expect(testShip.getTimesHit()).toEqual(1);
    })
});