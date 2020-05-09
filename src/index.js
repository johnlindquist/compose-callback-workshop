let button = document.getElementById("button")
let input = document.getElementById("input")

button.addEventListener("click", event => {
    console.log("clicked the button")
})

input.addEventListener("input", event => {
    console.log(event.target.value)
})

setInterval(() => {
    console.log("tick")
}, 1000)

setTimeout(() => {
    console.log("done")
}, 1000)