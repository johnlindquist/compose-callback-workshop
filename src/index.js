let log = value => {
    console.log(value)
}
let keyDown = listener => {
    document.addEventListener("keydown", listener)
}

let window = count => broadcaster => listener => {
    let values = []
    broadcaster(value => {
        values.push(value)
        if (values.length > count)
            values.shift()
        listener(values)
    })
}

let join = broadcaster => listener => {
    broadcaster(array => listener(array.join("")))
}

let getKey = broadcaster => listener =>
    broadcaster(value => listener(value.key))

let konamiCodeFilter = broadcaster => listener => {
    broadcaster(value =>
        value == "ArrowUpArrowDownArrowLeftArrowRight"
            ? listener("konami!")
            : listener(value)
    )
}

let compose = (...fns) => fns.reduce((prev, next) => (...args) => prev(next(...args)))

let checkKonami = compose(
    konamiCodeFilter,
    join,
    window(4),
    getKey
)

checkKonami(keyDown)(log)