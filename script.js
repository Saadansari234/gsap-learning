// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: '50%',
//     scale: 1.5,
// })
// gsap.from("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1
// })
// gsap.to("#box1", {
//     x: 1000,
//    rotate:360,
//    duration:2,
//    delay:1,
//    repeat:-1,
//    yoyo:true, //will return back after the given task
// })


gsap.from("h1", {
    y: 30,
    opacity: 0,
    duration: 2,
    color: "red",
    stagger: 0.2,
    delay: 1,
})


var tl = gsap.timeline()

tl.to("#box1", {
    x: 1000,
    rotate: 360,
    duration: 2,
    delay: 1,
})

tl.to("#box2", {
    x: 1000,
    rotate: 360,
    duration: 2,
  
})

tl.to("#box3", {
    x: 1000,
    rotate: 360,
    duration: 2,
  
})