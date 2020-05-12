import "./styles.css";

let done = Symbol("done")

let oneSecond = listener => {
    setTimeout(() => {
        listener(done)
    }, 1000)
}

let output = document.getElementById("output")
let writeHTML = value => {
    if (value === done) return
    output.innerHTML = `<h2>${value}</h2>`
}

let concat = (...broadcasters) => listener => {
    let i = 0

    let setup = broadcaster => {
        broadcaster(value => {
            if (value === done) {
                ++i < broadcasters.length
                    ? setup(broadcasters[i])
                    : listener(done)

            }
            if (value !== done) listener(value)
        })
    }

    setup(broadcasters[i])
}

let mapTo = mappedValue => broadcaster => listener => {
    broadcaster(value => {
        listener(mappedValue)
        if (value === done) listener(done)
    })
}

let ready = mapTo("ready")(oneSecond)
let set = mapTo("set")(oneSecond)
let go = mapTo("go!")(oneSecond)


concat(ready, set, go)(writeHTML)
