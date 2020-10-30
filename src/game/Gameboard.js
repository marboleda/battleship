const gameBoard = () => {
    const gameBoardState = [...Array(8)].map(() => Array(8).fill(0));

    return { gameBoardState }
}

export default gameBoard;