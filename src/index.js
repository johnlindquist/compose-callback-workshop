import "./styles.css";

let box = document.getElementById("box")

let boxAnimated = listener => {
    box.addEventListener("animationend", listener)
}

let logValue = value => {
    console.log(value)
}

boxAnimated(logValue)