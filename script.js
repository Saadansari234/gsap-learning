gsap.from("#box1", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,

})

// gsap.from("#box2",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:".container2 #box2",
//         scrller:"body",
//         markers:true,
//         start:"top 100%"
//     }
// })

// gsap.from(".container2 #box2 h1",{
//     // scale:0,
//     opacity:0,
//     x:500,
//     duration:2,
//     scrollTrigger:{
//         trigger:".container2 #box2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from(".container2 #box2 h2",{
//     // scale:0,
//     opacity:0,
//     x:-500,
//     duration:2,
//     scrollTrigger:{
//         trigger:".container2 #box2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#box3",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//      scrollTrigger:".container3 #box3"
// })

// gsap.from(".container3 #box3", {
//     opacity: 0,
//     scale: 0,
//     duration: 8,
//     rotate: 760,
//     scrollTrigger: {
//         trigger: ".container3 #box3",
//         scrller: "body",
//         markers: true,
//         start: "top 60%",
//          end: "top 20%",
//          scrub:10
//     }
// })

gsap.to(".container2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:".container2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})