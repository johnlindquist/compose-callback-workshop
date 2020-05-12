import "./styles.css";

let button = document.getElementById("button")

let createEventBroadcaster = (element, eventType) => listener => {
    element.addEventListener(eventType, listener)
}

let buttonClick = createEventBroadcaster(button, "click")

let log = value => {
    console.log(value)
}

let delayOneSecond = broadcaster => listener => {
    broadcaster(value => {
        setTimeout(() => {
            listener(value)
        }, 1000);
    })
}

let debounce = broadcaster => listener => {
    let id;
    broadcaster(value => {
        if (id) clearTimeout(id)
        id = setTimeout(() => {
            listener(value)
        }, 250);
    })
}


debounce(buttonClick)(log)
