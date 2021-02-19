import React from 'react';
import ShipComponent from './ShipComponent'

const menu = (props) => {

    const { drag, orientations, clickShip, clickCell, shipOnPlayerBoard} = props;

    return (
        <div className='menu'>
            <ShipComponent drag={drag} clickShip={clickShip} clickCell={clickCell} shipId='0' orientation={orientations[0]} onBoard={shipOnPlayerBoard[0]} shipType='carrier'/>
            <ShipComponent drag={drag} clickShip={clickShip} clickCell={clickCell} shipId='1' orientation={orientations[1]} onBoard={shipOnPlayerBoard[1]} shipType='battleship' />
            <ShipComponent drag={drag} clickShip={clickShip} clickCell={clickCell} shipId='2' orientation={orientations[2]} onBoard={shipOnPlayerBoard[2]} shipType='cruiser'  />
            <ShipComponent drag={drag} clickShip={clickShip} clickCell={clickCell} shipId='3' orientation={orientations[3]} onBoard={shipOnPlayerBoard[3]} shipType='submarine' />
            <ShipComponent drag={drag} clickShip={clickShip} clickCell={clickCell} shipId='4' orientation={orientations[4]} onBoard={shipOnPlayerBoard[4]} shipType='destroyer' />
        </div>
    )
};

export default menu;