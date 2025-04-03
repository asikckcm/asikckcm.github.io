function detectCrazy() {
    if (new Date().getDay() === 4) {
        const tip = document.createElement('div')
        tip.className = 'warning'
        tip.innerHTML = "疯狂星期四！V我50！"
        document.getElementById("head_tip").appendChild(tip)
    }
}