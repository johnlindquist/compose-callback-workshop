import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")
let form = document.getElementById("form")

form.addEventListener("submit", event => {
    event.preventDefault()
})

let createEventBroadcaster = (element, event) => listener => {
    element.addEventListener(event, listener)
}

let buttonClick = createEventBroadcaster(button, "click")
let nameInput = createEventBroadcaster(name, "input")

let logValue = value => {
    console.log(value)
}

let withValueFromSecond = (firstBroadcaster, secondBroadcaster) => listener => {
    let secondValue = null
    secondBroadcaster(value => {
        secondValue = value
    })

    firstBroadcaster(ignore => {
        listener(secondValue)
    })
}

let map = transform => broadcaster => listener => {
    broadcaster(value => {
        listener(transform(value))
    })
}
let targetValue = map(event => event.target.value)

targetValue(withValueFromSecond(buttonClick, nameInput))(logValue)