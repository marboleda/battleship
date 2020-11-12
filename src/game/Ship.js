const ship = (shipType, startingCoordinates = [0,0], orientation = 0) => {
    /* orientation: 0 => horizontal, 1 => vertical */

    let length;
    let timesHit = 0;
    let coordinatesOccupied = [];

    switch(shipType) {
        case 'carrier':
            length = 5;
            break;
        case 'battleship':
            length = 4;
            break;
        case 'cruiser':
        case 'submarine':
            length = 3;
            break;
        case 'destroyer':
            length = 2;
    }

    const getLength = () => {
        return length;
    }

    const getOrientation = () => {
        return orientation;
    }

    const getPlacementCoordinates = () => {
        return startingCoordinates;
    }

    const getCoordinatesOccupied = () => {
        return coordinatesOccupied;
    }

    const setCoordinatesOccupied = (coordinates) => {
        coordinatesOccupied = coordinates;
    }

    const hit = () => {
        timesHit++;
    }

    const getTimesHit = () => {
        return timesHit;
    }
    
    const isSunk = () => {
        return length === timesHit;
    }

    return { getLength, getOrientation, getPlacementCoordinates, getCoordinatesOccupied, setCoordinatesOccupied, hit, getTimesHit, isSunk }

}

export default ship;