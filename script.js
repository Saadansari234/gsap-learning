let h1 = document.querySelector("#main h1")

function splitedTextFunc() {
    let splitedText = h1.textContent.split("")

    let halfword= splitedText.length/2
    let clutter = ""
    splitedText.forEach((elem, id) => {
        if (id < halfword) {
            clutter += `<span class="a">${elem}</span>`
        } else {
            clutter += `<span class="b">${elem}</span>`
        }
    })


    h1.innerHTML = clutter

}

splitedTextFunc()

gsap.from("#main h1 .a", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.5
})

gsap.from("#main h1 .b", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: -0.15,
    delay: 0.5
})


