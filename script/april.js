function bomb() {
    document.getElementById("message").innerHTML = "都说了叫你别点<br/>你掉进声波陷阱了！<br/>\
    让你按按钮是为了绕开浏览器直接播放音频的限制";
    const music = new Audio("bomb.mp3")
    music.play()
}