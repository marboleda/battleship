import Ship from './Ship';

describe('Making sure ships are being created with the correct length', () => {

    test('Carrier has proper length of 5', () => {
        expect(Ship('carrier').getLength()).toEqual(5);
    });

    test('Battleship has proper length of 4', () => {
        expect(Ship('battleship').getLength()).toEqual(4);
    });

    test('Cruiser has proper length of 3', () => {
        expect(Ship('cruiser').getLength()).toEqual(3);
    });

    test('Submarine has proper length of 3', () => {
        expect(Ship('submarine').getLength()).toEqual(3);
    });

    test('Destroyer has proper length of 2', () => {
        expect(Ship('destroyer').getLength()).toEqual(2);
    });
});