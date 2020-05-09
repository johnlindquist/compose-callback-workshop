import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let nameInput = listener => {
    name.addEventListener("input", listener)
}

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

withValueFromSecond(buttonClick, nameInput)(logValue)