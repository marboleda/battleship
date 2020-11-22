import React from 'react';

const grid = (props) => {

    const { playerType } = props;

    return (
        <div className='grid'>
            {[...Array(64).keys()].map((gridIndex) => {
                return <div id={`${playerType}${gridIndex}`}></div>
            })}
        </div>
    );
};

export default grid;