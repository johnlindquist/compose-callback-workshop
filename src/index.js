import "./styles.css";

let button = document.getElementById("button")

let buttonClick = destination => {
  button.addEventListener("click", destination)
}

let logValue = value => {
  console.log(value)
}

let pageXAndY = source => destination => {
  source(event => {
    destination(event.pageX)
    destination(event.pageY)
  })
}

pageXAndY(buttonClick)(logValue)
