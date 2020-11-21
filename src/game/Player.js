const player = (type) => {
    
    const attackEnemy = (enemyGameboard, coordinates) => {
        if (type === 'human') {
            enemyGameboard.receiveAttack(coordinates);
        } else { //type === 'computer'
            let xCoord = Math.floor(Math.random() * 8);
            let yCoord = Math.floor(Math.random() * 8);
            let validPosition = false;

            while (!validPosition) {
                if (enemyGameboard.getGameboardState()[yCoord][xCoord] === 1 ||
                    enemyGameboard.getGameboardState()[yCoord][xCoord] === 0) {
                        validPosition = true;
                        enemyGameboard.receiveAttack([xCoord, yCoord]);
                    }
                else {
                    xCoord = Math.floor(Math.random() * 8);
                    yCoord = Math.floor(Math.random() * 8);
                }
            }

        }
    }

    return { attackEnemy }

}

export default player;