export let mapTo = value => broadcaster => listener => {
    broadcaster(ignore => {
        listener(value)
    })
}

export let delay = time => broadcaster => listener => {
    broadcaster(value => {
        setTimeout(() => {
            listener(value)
        }, time)
    })
}