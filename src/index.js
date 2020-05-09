import "./styles.css"

import { compose } from "./utils"
import { createEventBroadcaster } from "./broadcasters"
import { mapTo, delay } from "./operators"
import { log } from "./listeners"

let button = document.getElementById("button")
let buttonClick = createEventBroadcaster(button, "click")

let operations = compose(
    delay(1000),
    mapTo("hi")
)

operations(buttonClick)(log)