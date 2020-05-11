import "./styles.css";

let button = document.getElementById("button")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let names = listener => {
    setTimeout(() => {
        ["John", "Sarah", "Ben"].forEach(listener)
    }, 0)
}

let logValue = value => {
    console.log(value)
}

let pair = (broadcaster1, broadcaster2) => listener => {
    let broadcaster1Values = []
    let broadcaster2Values = []

    broadcaster1(value => {
        broadcaster1Values.push(value)

        if (broadcaster2Values.length) {
            listener([
                broadcaster1Values.shift(),
                broadcaster2Values.shift()
            ])
        }
    })

    broadcaster2(value => {
        broadcaster2Values.push(value)

        if (broadcaster1Values.length) {
            listener([
                broadcaster1Values.shift(),
                broadcaster2Values.shift()
            ])
        }
    })
}

pair(buttonClick, names)(logValue)
