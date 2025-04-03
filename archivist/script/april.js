function bomb(text) {
    document.getElementById("message").innerHTML = text+"<br/>你掉进声波陷阱了！<br/>\
    让你按按钮是为了绕开浏览器直接播放音频的限制";
    const music = new Audio("bomb.mp3")
    music.play()
}

function end_click() {
    document.getElementById("message").innerHTML = "哈哈哈！<br/>你掉进声波陷阱了！<br/>\
    让你按按钮是为了绕开浏览器直接播放音频的限制";
    const music = new Audio("bomb.mp3")
    music.play()
    alert('这你也能发现？\n你没看代码吧...\n不过...彩蛋我也改了')
}