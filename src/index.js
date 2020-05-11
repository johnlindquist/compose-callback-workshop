import "./styles.css";

let first = document.getElementById("first")
let last = document.getElementById("last")
let output = document.getElementById("output")

let firstInput = listener => {
    first.addEventListener("input", listener)
}

let lastInput = listener => {
    last.addEventListener("input", listener)
}

let writeToOutput = value => {
    output.innerHTML = value
}

let together = (firstBroadcaster, secondBroadcaster) => listener => {
    let firstValue = ""
    let secondValue = ""

    firstBroadcaster(value => {
        firstValue = value
        listener([firstValue, secondValue])
    })

    secondBroadcaster(value => {
        secondValue = value
        listener([firstValue, secondValue])
    })
}

let getTargetValue = broadcaster => listener => {
    broadcaster(event => {
        listener(event.target.value)
    })
}

let join = broadcaster => listener => {
    broadcaster(array => {
        listener(array.join(" "))
    })
}


join(together(
    getTargetValue(firstInput),
    getTargetValue(lastInput)
))
    (writeToOutput)