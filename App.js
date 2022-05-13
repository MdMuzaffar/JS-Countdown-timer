const countStart = 10;
let time = countStart * 60;

const countElement = document.getElementById('countdown');

setInterval(countBegan, 1000)

function countBegan() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    countElement.innerHTML = `${minutes} : ${seconds}`
    time--;
}