function Main(){
    let Bokoblin = document.getElementById("script")
    Bokoblin.innerText = "用户代理字符串:" + navigator.userAgent
    
}
function Rubbish(){
    let T = Date.now()
    localStorage.setItem(T,"芙莉莲大人天下第一!")
    console.info("芙莉莲大人天下第一!")
}
function fufu(){
    alert("人是可以耳朵尖尖的!!!")
}
window.addEventListener("load",Main)
window.addEventListener("volumechange",fufu)
window.addEventListener("copy",fufu)
window.addEventListener("drag",fufu)
window.addEventListener("drog",fufu)
window.addEventListener("mouseout",fufu)
window.addEventListener("cut",fufu)
window.addEventListener("touchstart",fufu)
window.setInterval(Rubbish,2)