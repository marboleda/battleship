const ship = (shipType) => {

    let length;

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

    return { getLength }

}

export default ship;