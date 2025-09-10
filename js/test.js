const button = document.getElementById("button-play-music");
const music = document.getElementById("music");
button.addEventListener("click", () => {
    if (music.paused) {
        button.innerText = "Nhấn để tắt nhạc";
        music.play();
    } else {
        button.innerText = "Nhấn để mở nhạc";
        music.pause();
    }
});
