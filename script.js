let svg = document.querySelector("svg")
let inital = `M 10 100 Q 250 100 490 100`

svg.addEventListener("mousemove", (dest) => {
    let cordinates = `M 10 100 Q ${dest.x} ${dest.y} 490 100`
    gsap.to("svg path", {
        attr: { d: cordinates },
        duration:0.3,
        ease:"power3.out"
    })
})

svg.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: inital },
        ease:"elastic.out(1,0.3)",
        duration:0.3
    })

})