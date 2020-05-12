import "./styles.css";

let writeHTML = value => {
    document.getElementById("output").innerHTML = `<h2>${value}</h2>`
}

let ofString = value => listener => {
    setTimeout(() => {
        listener(value)
    }, 0)
}

let delay = time => broadcaster => listener => {
    broadcaster(value => {
        setTimeout(() => {
            listener(value)
        }, time)
    })
}

let delay3Seconds = delay(3000)
let hello = ofString("Hello!")

delay3Seconds(hello)(writeHTML)