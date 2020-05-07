import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")
let form = document.getElementById("form")
let mirror = document.getElementById("mirror")
let list = document.getElementById("list")
const URL = `https://foamy-closet.glitch.me`;

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


let search = term => async destination => {
  destination(await fetch(`${URL}/people?name_like=${term}`))
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

let mirrorText = text => {
  mirror.innerText = text
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

let switchTo = switcher => source => destination => {
  source(value => {
    switcher(value)(destination)
  })
}

let map = xf => source => destination => {
  source(value => {
    let mapped = xf(value)
    destination(mapped)
  })
}

let filter = pred => source => destination => {
  source(value => {
    if (pred(value)) {
      destination(value)
    }
  })
}

let mapAsync = xf => source => destination => {
  source(value => {
    let mapped = xf(value)
    mapped.then(destination)
  })
}


let sharedNameInput = share()(nameInput)
let nameInputTargetValue = getTargetValue(sharedNameInput)

nameInputTargetValue(mirrorText)

let getJSON = mapAsync(async response => await response.json())
let longEnough = filter(text => text.length > 2)

let listResults = value => {
  list.innerHTML = value.map(item => `<div>${item.name}</div>`).join("")
}

let longEnoughName = longEnough(nameInputTargetValue)

getJSON(switchTo(name => search(name))(longEnoughName))(listResults)

let sharedButton = share()(buttonClick)

let getNameAfterButtonClick = withValueFromSecond(sharedButton, nameInputTargetValue)
getNameAfterButtonClick(logValue)
getNameAfterButtonClick(clearInput)

