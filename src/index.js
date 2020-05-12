import "./styles.css";

let button = document.getElementById("button")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let boxAnimate = id => listener => {
    let box = document.getElementById(id)
    box.classList.add("slide")
    box.addEventListener("animationend", listener)
}

let logValue = value => {
    console.log(value)
}

let switchTo = toBroadcaster => broadcaster => listener => {
    broadcaster(value => {
        toBroadcaster(listener)
    })
}

switchTo(boxAnimate("blue"))
    (switchTo(boxAnimate("green"))
        (switchTo(boxAnimate("red"))
            (buttonClick)
        ))(logValue)