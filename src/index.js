import "./styles.css";

let button = document.getElementById("button")
let name = document.getElementById("name")
let form = document.getElementById("form")
let mirror = document.getElementById("mirror")
let list = document.getElementById("list")
const URL = `https://foamy-closet.glitch.me`;
//Generate your own server here: https://codesandbox.io/s/github/johnlindquist/swapi-json-server

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


let search = term => async listener => {
    listener(await fetch(`${URL}/people?name_like=${term}`))
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

let mirrorText = text => {
    mirror.innerText = text
}

let share = () => {
    let destinations = []

    return broadcaster => listener => {
        destinations.push(listener)
        if (destinations.length > 1) return
        broadcaster(value => {
            destinations.forEach(fn => fn(value))
        })
    }
}

let switchTo = switcher => broadcaster => listener => {
    broadcaster(value => {
        switcher(value)(listener)
    })
}

let map = xf => broadcaster => listener => {
    broadcaster(value => {
        let mapped = xf(value)
        listener(mapped)
    })
}

let filter = pred => broadcaster => listener => {
    broadcaster(value => {
        if (pred(value)) {
            listener(value)
        }
    })
}

let mapAsync = xf => broadcaster => listener => {
    broadcaster(value => {
        let mapped = xf(value)
        mapped.then(listener)
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
let getNameResults = getJSON(switchTo(name => search(name))(longEnoughName))

getNameResults(listResults)

let sharedButton = share()(buttonClick)

let getNameAfterButtonClick = withValueFromSecond(sharedButton, nameInputTargetValue)
getNameAfterButtonClick(logValue)
getNameAfterButtonClick(clearInput)

