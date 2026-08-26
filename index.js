function Main(){
    let Bokoblin = document.getElementById("boko")
    window.addEventListener("",(f)=>{
        let Clip = new Clipboard()
        alert(Clip.readText())
    })
    
}
window.addEventListener("load",Main)