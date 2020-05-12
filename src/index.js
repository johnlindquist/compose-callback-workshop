import "./styles.css";

let button = document.getElementById("button")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let input = document.getElementById("input")

let inputInput = listener => {
    input.addEventListener("input", listener)
}

let both = (firstBroadcaster, secondBroadcaster) => listener => {
    firstBroadcaster(listener)
    secondBroadcaster(listener)
}

let together = (firstBroadcaster, secondBroadcaster) => listener => {
    let firstValue;
    firstBroadcaster(value => {
        firstValue = value

        listener([firstValue, secondValue])
    })

    let secondValue;
    secondBroadcaster(value => {
        secondValue = value

        listener([firstValue, secondValue])
    })
}
let withValueFromSecond = (firstBroadcaster, secondBroadcaster) => listener => {
    //setup a way to track the input events
    let secondValue;
    //Click a button
    firstBroadcaster(
        //ignoring button events
        value => {
            //instead, passing value from input events
            listener(secondValue)
        })

    //input text field
    secondBroadcaster(
        //input events
        value => {
            //assign input event to secondValue to pass into
            //the buttonClick listener
            secondValue = value
        })
}

let getTargetValue = broadcaster => listener => {
    broadcaster(event => {
        listener(event.target.value)
    })
}


let log = value => {
    console.log(value)
}

let clickThenInput = withValueFromSecond(buttonClick, inputInput)
let targetValueFromInput = getTargetValue(clickThenInput)

targetValueFromInput(log)





