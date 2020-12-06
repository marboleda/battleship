import React from 'react';
import styled from 'styled-components';

const ShipDisplay = styled.div`
    display: flex;
    flex-direction: ${props => props.orientation === 0 ? "row" : "column"};
    margin-top: 10px;
    margin-bottom: 10px;
`;

const ShipCell = styled.div`
    width: 3vw;
    height: 3vh;
    background-color: black;
    border-style: solid;
    border-color: white;
    border-width: 0.5px;
`;


const shipComponent = (props) => {

    const { drag, shipType, shipId, orientation, click } = props;


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
            shipSquares.push(<ShipCell className='ship-cell' />);
        }

        return shipSquares;
    }

    return (
        <ShipDisplay
            draggable
            onDrag={() => {drag(shipType)}}
            orientation={orientation}
            onClick={() => {click(shipId, orientation === 1 ? 0 : 1)}}
            className='shipDisplay' 
        >
            {createShip(shipType)}
        </ShipDisplay>
    )
};

export default shipComponent;