

const buttonHandler = (buttonName) => {
    switch (buttonName) {
        case 'playSpaceShooter':
            window.open('./games/spaceShooter/index.html', '_self')
            break;

        default:
            break;
    }

}

document.addEventListener('click', (event) => {
    buttonHandler(event.target.name);
})