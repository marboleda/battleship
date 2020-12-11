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
    background-color: ${props => props.color}; 
    :hover {
        background-color: ${props => ((props.isPlayerTurn === true) && (props.playerType === 'c')) ? '#D3D3D3' : (props.color)}
    }
`;


const grid = (props) => {

    const { playerType, drop, gameboard, currentShipId, isPlayerTurn, clickEnemyGrid } = props;


    return (
        <div className = 'grid'>
            <h2>{(playerType === 'h') ? 'You' : 'Enemy'}</h2>
            <Grid>
                {[...Array(100).keys()].map((gridIndex) => {
                    const xCoord = (gridIndex % 10);
                    const yCoord = (gridIndex < 10) ? 0 : Number(gridIndex.toString().substring(0,1));
                    return <Cell 
                                id={`${playerType}${gridIndex}`}
                                onDragOver={(e) => {e.preventDefault()}}
                                onDrop={(e) => {
                                                e.preventDefault();
                                                drop(playerType, [ xCoord, yCoord ], currentShipId)
                                                }}
                                color={(gameboard[yCoord][xCoord] === 1 && playerType === 'h') ? "black" : "white"}
                                isPlayerTurn={isPlayerTurn}
                                playerType={playerType}
                                onClick={(e) => clickEnemyGrid([xCoord, yCoord], playerType, isPlayerTurn)}
                            >
                            </Cell>
                })}
            </Grid>
        </div>
    );
};

export default grid;