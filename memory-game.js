// Selectors
const tiles = document.querySelectorAll('#tile');

// Load new game
window.addEventListener('DOMContentLoaded', function () {
    // (1) - Create random number
    createRandomNum();
    //  (2) - Create random tiles
    createTiles();
    //  (3) - Run the game
    runGame();

});

// Keep count of game
let cardsTurned = 0;
let clicks = 0;

let image1 = '';
let image2 = '';

let card1 = '';
let card2 = '';

let correctCards = 0;

// (3) - Run game ----------------------------------------------
function runGame() {
    // Watch tiles
    tiles.forEach(function (tile) {
        tile.addEventListener('click', function () {
            cardsTurned += 1;
            clicks += 1;
            if (cardsTurned === 1) {
                // Set image1 to image1
                image1 = tile.lastElementChild.className;
                // Save card 1
                card1 = tile.firstElementChild;
                // Show image 1
                tile.firstElementChild.classList.add('hide');
            } else if (cardsTurned > 1) {
                // Set image 2 to image2
                image2 = tile.lastElementChild.className;
                // Save card 2
                card2 = tile.firstElementChild;
                // Show card 2
                tile.firstElementChild.classList.add('hide');
                compareImages(image1, image2);

                cardsTurned = 0;
            }
            console.log(`correct cards = ${correctCards}`);
        })
    });
}

// Hides image after click
function removeImg(tile) {
    setTimeout(function () {
        card1.classList.remove('hide');
        card2.classList.remove('hide');
    }, 500);
}

// Compare Images
function compareImages(image1, image2) {
    if (image1 === image2) {
        correctCards += 2;
        endGame();
    } else if (image1 !== image2) {
        removeImg(tile);
    }
}

// Endgame
function endGame() {
    setTimeout(function () {
        if (correctCards === 16) {
            alert(`It took you ${clicks} clicks to win. Play again?`);
            location.reload();
        } else {

        }
    }, 500);
}

// -------------------------------------------------------------------------

// (1) - Create random number ----------------------------------------------

// (1a) Random Number
const numList = [];

// (1b) Add random number to array
function addRandomNumber() {
    const randomNum = (Math.floor(Math.random() * 16));
    if (randomNum !== numList[0] &&
        randomNum !== numList[1] &&
        randomNum !== numList[2] &&
        randomNum !== numList[3] &&
        randomNum !== numList[4] &&
        randomNum !== numList[5] &&
        randomNum !== numList[6] &&
        randomNum !== numList[7] &&
        randomNum !== numList[8] &&
        randomNum !== numList[9] &&
        randomNum !== numList[10] &&
        randomNum !== numList[11] &&
        randomNum !== numList[12] &&
        randomNum !== numList[13] &&
        randomNum !== numList[14] &&
        randomNum !== numList[15]) {
        numList.push(randomNum);
    } else {
        numList.push();
    }
}

// (1c) Creates random array
function createRandomNum() {

    while (numList.length < 16) {
        addRandomNumber()
    }
};


// -------------------------------------------------------------------------

//  (2) - Create random tiles ----------------------------------------------

// Create tiles on page load
function createTiles() {
    tiles.forEach(function (tile, index) {
        const img = document.createElement('img');
        img.src = `Images/Animal-${numList[index]}.jpg`;
        const imgName = img.src.split("/").pop();

        // Create matching class names
        if (imgName === 'Animal-0.jpg' || imgName === 'Animal-8.jpg') {
            img.classList.add('Reptile');
        } else if (imgName === 'Animal-1.jpg' || imgName === 'Animal-9.jpg') {
            img.classList.add('Tiger');
        } else if (imgName === 'Animal-2.jpg' || imgName === 'Animal-10.jpg') {
            img.classList.add('Puffin');
        } else if (imgName === 'Animal-3.jpg' || imgName === 'Animal-11.jpg') {
            img.classList.add('Zebra');
        } else if (imgName === 'Animal-4.jpg' || imgName === 'Animal-12.jpg') {
            img.classList.add('Puma');
        } else if (imgName === 'Animal-5.jpg' || imgName === 'Animal-13.jpg') {
            img.classList.add('Panda');
        } else if (imgName === 'Animal-6.jpg' || imgName === 'Animal-14.jpg') {
            img.classList.add('Horse');
        } else if (imgName === 'Animal-7.jpg' || imgName === 'Animal-15.jpg') {
            img.classList.add('Squirrel');
        } else {

        }
        tile.appendChild(img);
    });
}


