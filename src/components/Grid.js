import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
display: grid;
width: 30vw;
height: 30vh;
border-style: solid;
border-width: 2px;
grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
`;

const Cell = styled.div`
border-style: solid;
border-width: 0.5px;
`;


const grid = (props) => {

    const { playerType, drop } = props;


    return (
        <div className = 'grid'>
            <h2>{(playerType === 'h') ? 'You' : 'Enemy'}</h2>
            <Grid>
                {[...Array(100).keys()].map((gridIndex) => {
                    return <Cell 
                                id={`${playerType}${gridIndex}`}
                                onDragOver={(e) => {e.preventDefault()}}
                                onDrop={(e) => {
                                                e.preventDefault();
                                                drop(playerType, [ (gridIndex % 10), Number(gridIndex.toString().substring(0,1)) ])
                                                }}
                            >
                            </Cell>
                })}
            </Grid>
        </div>
    );
};

export default grid;