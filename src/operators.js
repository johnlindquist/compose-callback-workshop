export let mapTo = value => broadcaster => listener => {
    return broadcaster(ignore => {
        listener(value)
    })
}

export let stopWhen = stopBroadcaster => broadcaster => listener => {
    let stop = broadcaster(listener)

    stopBroadcaster(stop)

    return stop
}