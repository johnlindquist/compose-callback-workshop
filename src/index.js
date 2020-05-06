import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")

let buttonClick = destination => {
  button.addEventListener("click", destination)
}

let nameInput = destination => {
  name.addEventListener("input", destination)
}

let logValue = value => {
  console.log(value)
}

let withValueFromSecond = (first, second) => destination => {
  let secondValue = null
  second(value => {
    secondValue = value
  })

  first(ignore => {
    destination(secondValue)
  })
}

let getTargetValue = source => destination => {
  source(value => {
    destination(value.target.value)
  })
}

withValueFromSecond(buttonClick, getTargetValue(nameInput))(logValue)