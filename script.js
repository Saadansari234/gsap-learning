
let menu = document.querySelector("#nav i")
let close= document.querySelector("#full i")
let main=document.querySelector("#main")

var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 0.3
})
tl.from("#full h4",{
    opacity:0,
    x:150,
    duration:0.7,
    // delay:0.3,
    stagger:0.3
})
tl.from("#full i",{
    opacity:0,
})

tl.pause()
menu.addEventListener("click", () => {
   tl.play()
})

close.addEventListener("click",()=>{
 tl.reverse()
})

main.addEventListener("mousemove",(dest)=>{
    gsap.to("#cursor",{
        x:dest.x,
        y:dest.y,
        ease: "back.out(1.7)",
        duration:1,
    })
})