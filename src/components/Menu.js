import React from 'react';
import ShipComponent from './ShipComponent'

const menu = (props) => {

    const { drag } = props;

    return (
        <div className='menu'>
            <ShipComponent drag={drag} shipType='carrier' />
            <ShipComponent drag={drag} shipType='battleship' />
            <ShipComponent drag={drag} shipType='battleship' />
            <ShipComponent drag={drag} shipType='cruiser' />
            <ShipComponent drag={drag} shipType='cruiser' />
            <ShipComponent drag={drag} shipType='cruiser' />
            <ShipComponent drag={drag} shipType='submarine' />
            <ShipComponent drag={drag} shipType='submarine' />
            <ShipComponent drag={drag} shipType='submarine' />
            <ShipComponent drag={drag} shipType='destroyer' />
            <ShipComponent drag={drag} shipType='destroyer' />
            <ShipComponent drag={drag} shipType='destroyer' />
            <ShipComponent drag={drag} shipType='destroyer' />
        </div>
    )
};

export default menu;