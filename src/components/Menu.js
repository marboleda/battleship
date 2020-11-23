import React from 'react';
import ShipComponent from './ShipComponent'

const menu = () => {
    return (
        <div className='menu'>
            <ShipComponent shipType='carrier' />
            <ShipComponent shipType='battleship' />
            <ShipComponent shipType='battleship' />
            <ShipComponent shipType='cruiser' />
            <ShipComponent shipType='cruiser' />
            <ShipComponent shipType='cruiser' />
            <ShipComponent shipType='submarine' />
            <ShipComponent shipType='submarine' />
            <ShipComponent shipType='submarine' />
            <ShipComponent shipType='destroyer' />
            <ShipComponent shipType='destroyer' />
            <ShipComponent shipType='destroyer' />
            <ShipComponent shipType='destroyer' />
        </div>
    )
};

export default menu;