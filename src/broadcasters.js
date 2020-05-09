export let createEventBroadcaster = (element, event) => listener => {
    element.addEventListener(event, listener)

    return () => {
        element.removeEventListener(event, listener)
    }
}

export let createInterval = time => listener => {
    let id = setInterval(listener, time)

    return () => {
        clearInterval(id)
    }
}