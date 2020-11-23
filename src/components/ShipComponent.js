import React from 'react';

const shipComponent = (props) => {

    const { shipType } = props;

    const createShip = (type) => {
        let shipLength;
        let shipSquares = [];

        switch(type) {
            case 'carrier':
                shipLength = 5;
                break;
            case 'battleship':
                shipLength = 4;
                break;
            case 'cruiser':
                shipLength = 3;
                break;
            case 'submarine':
                shipLength = 3;
                break;
            case 'destroyer':
                shipLength = 2;
                break;
        }

        for (let i = 0; i < shipLength; i++) {
            shipSquares.push(<div className='ship-cell' />);
        }

        return shipSquares;
    }

    return (
        <div className='shipDisplay'>
            {createShip(shipType)}
        </div>
    )
};

export default shipComponent;