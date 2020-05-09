import "./styles.css"

import { createEventBroadcaster } from "./broadcasters"
import { log } from "./listeners"

let button = document.getElementById("button")
let buttonClick = createEventBroadcaster(button, "click")

let takeOnly = howMany => broadcaster => listener => {
    let count = 0
    let stop = broadcaster(value => {
        listener(value)
        count++
        if (count == howMany) {
            stop()
        }
    })


    return stop
}

takeOnly(2)(buttonClick)(log)