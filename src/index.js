import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")
let form = document.getElementById("form")
form.addEventListener("submit", event => {
    event.preventDefault()
})


let buttonClick = listener => {
    console.log("setup")
    button.addEventListener("click", listener)
}

let nameInput = listener => {
    name.addEventListener("input", listener)
}

let logValue = value => {
    console.log(value)
}

let withValueFromSecond = (first, second) => listener => {
    let secondValue = null
    second(value => {
        secondValue = value
    })

    first(ignore => {
        listener(secondValue)
    })
}

let getTargetValue = broadcaster => listener => {
    broadcaster(value => {
        listener(value.target.value)
    })
}


let clearInput = () => {
    name.value = ""
}

let share = () => {
    let listeners = []

    return broadcaster => listener => {
        listeners.push(listener)
        if (listeners.length > 1) return
        broadcaster(value => {
            listeners.forEach(listener => listener(value))
        })
    }
}

let sharedNameInput = share()(nameInput)
let nameInputTargetValue = getTargetValue(sharedNameInput)

let sharedButton = share()(buttonClick)

let getNameAfterButtonClick = withValueFromSecond(sharedButton, nameInputTargetValue)
getNameAfterButtonClick(logValue)
getNameAfterButtonClick(clearInput)
