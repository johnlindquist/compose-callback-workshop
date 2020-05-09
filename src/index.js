import "./styles.css"

import { compose } from "./utils"
import { createEventBroadcaster, createInterval } from "./broadcasters"
import { stopWhen, mapTo } from "./operators"
import { log } from "./listeners"

let stopButton = document.getElementById("stop")
let stopClick = createEventBroadcaster(stopButton, "click")

let interval = createInterval(1000)

let operations = compose(
    stopWhen(stopClick),
    mapTo("hi")
)

operations(interval)(log)