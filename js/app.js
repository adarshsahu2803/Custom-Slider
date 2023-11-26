let index = 0

function slideLeft() {
    if (index == 0) {
        index = 4;
    }
    else {
        index--;
    }
    changeBackground();
}

function slideRight() {
    index = (index+1) % 5;
    changeBackground();
}

function changeBackground() {
    const classElement = document.querySelector('.slide');
    classElement.style.backgroundImage = `url(/images/${index}.jpg)`;
}
