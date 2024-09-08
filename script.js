let cursor= document.querySelector("#cursor")
let main= document.querySelector("#main")
let image= document.querySelector("#image")
main.addEventListener("mousemove",(dent)=>{
  gsap.to(cursor,{
    x:dent.x,
    y:dent.y,
    ease: "back.out(1.7)",
    duration:1,
  })

})

image.addEventListener("mouseenter",(dent)=>{
    cursor.innerHTML=`<p>view more<p>`
  gsap.to(cursor,{
      scale:4,
    })
})

image.addEventListener("mouseout",(dent)=>{
     cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
      })
  })
