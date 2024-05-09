

const startGame = (gameName) => {
    switch (gameName) {
        case 'playSpaceShooter':
            window.open('./games/spaceShooter/index.html','_self')
            break;

        default:
            break;
    }

}

document.addEventListener('click', (event) => {
    startGame(event.target.name);
})