function Bevent(){window.addEventListener("copy",async (i)=>{
   alert(await navigator.clipboard.readText())
})}
window.addEventListener("load",Bevent)