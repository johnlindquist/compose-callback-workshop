import "./styles.css";

let button = document.getElementById("button")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let log = () => {
    console.log("hello world")
}

buttonClick(log)
