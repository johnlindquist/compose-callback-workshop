import "./styles.css";

let button = document.getElementById("button")
let text = document.getElementById("text")
let output = document.getElementById("output")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let textInput = listener => {
    text.addEventListener("input", listener)
}

let storageUpdated = listener => {
    window.addEventListener("storage", listener)
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

let getTargetValue = broadcaster => listener => {
    broadcaster(event => {
        listener(event.target.value)
    })
}

withValueFromSecond(buttonClick, getTargetValue(textInput))(value => {
    localStorage.setItem("output", value)
})

storageUpdated(event => {
    //only show up on a separate tab
    output.innerText = event.newValue
})