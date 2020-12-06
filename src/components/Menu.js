import React from 'react';
import ShipComponent from './ShipComponent'

const menu = (props) => {

    const { drag, orientations, clickShip} = props;

    return (
        <div className='menu'>
            <ShipComponent drag={drag} click={clickShip} shipId='0' orientation={orientations[0]} shipType='carrier'/>
            <ShipComponent drag={drag} click={clickShip} shipId='1' orientation={orientations[1]} shipType='battleship' />
            <ShipComponent drag={drag} click={clickShip} shipId='2' orientation={orientations[2]} shipType='cruiser'  />
            <ShipComponent drag={drag} click={clickShip} shipId='3' orientation={orientations[3]} shipType='submarine' />
            <ShipComponent drag={drag} click={clickShip} shipId='4' orientation={orientations[4]} shipType='destroyer' />
        </div>
    )
};

export default menu;