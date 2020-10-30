import Gameboard from './Gameboard';

describe('Make sure gameboard initialized properly', () => {

    test('Check that length of main array and each array inside is 8', () => {
        const testGameboard = Gameboard();
        let arrayLengthIs8 = true;

        arrayLengthIs8 = (testGameboard.gameBoardState.length !== 8) ? false : arrayLengthIs8;

        testGameboard.gameBoardState.forEach((row) => {
            arrayLengthIs8 = (row.length !== 8) ? false : arrayLengthIs8
        });

        expect(arrayLengthIs8).toEqual(true);
    });

    test('Check that every cell in the grid is set to 0 (indicating not hit by opposing player)', () => {
        const testGameboard = Gameboard();

        let everyValueIs0 = true;

        testGameboard.gameBoardState.forEach((row) => {
            row.forEach((value) => {
                everyValueIs0 = (value !== 0) ? false : everyValueIs0;
            });
        });

        expect(everyValueIs0).toEqual(true);
    });

});