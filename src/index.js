import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")
let form = document.getElementById("form")
form.addEventListener("submit", event => {
  event.preventDefault()
})


let buttonClick = destination => {
  console.log("setup")
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


let clearInput = () => {
  name.value = ""
}

let share = () => {
  let destinations = []

  return source => destination => {
    destinations.push(destination)
    if (destinations.length > 1) return
    source(value => {
      destinations.forEach(fn => fn(value))
    })
  }
}

let sharedNameInput = share()(nameInput)
let nameInputTargetValue = getTargetValue(sharedNameInput)

let sharedButton = share()(buttonClick)

let getNameAfterButtonClick = withValueFromSecond(sharedButton, nameInputTargetValue)
getNameAfterButtonClick(logValue)
getNameAfterButtonClick(clearInput)
