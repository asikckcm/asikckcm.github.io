function bomb() {
    document.getElementById("message").innerHTML = "都说了叫你别点";
    const music = new Audio("bomb.mp3")
    music.play()
}