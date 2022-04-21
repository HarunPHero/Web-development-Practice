const images = [
    "images/players/player-1-min.png",
    "images/players/player-2-min.png",
    "images/players/player-3-min.png",
    "images/players/player-4-min.png",
    "images/players/player-5-min.png",
    "images/players/player-6-min.png",
    "images/players/player-7-min.png",
    "images/players/player-8-min.png",
    "images/players/player-9-min.png",
    "images/players/player-10-min.png",
    "images/players/player-11-min.png",
    "images/players/player-12-min.png",
    "images/players/player-13-min.png",
    "images/players/player-14-min.png",
    "images/players/player-15-min.png"

]; let indexNum = 0;
const Sliderimage = document.getElementById('slider-image');
document.getElementById('click').addEventListener('click', function () {

    setInterval(() => {
        if (indexNum >= images.length) {
            indexNum = 0;

        }
        const imgUrl = images[indexNum];
        Sliderimage.src = imgUrl
        indexNum++

    }, 1000)


})
