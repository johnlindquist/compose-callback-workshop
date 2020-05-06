import "./styles.css";

let button = document.getElementById("button")

let buttonClick = destination => {
  button.addEventListener("click", destination)
}

let callback = () => {
  console.log("hello world")
}

buttonClick(callback)
