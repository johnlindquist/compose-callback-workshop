import "./styles.css";

let button = document.getElementById("button")

let buttonClick = listener => {
    button.addEventListener("click", listener)
}

let callback = () => {
    console.log("hello world")
}

let twice = source => listener => {
    source(() => {
        listener()
        listener()
    })
}

twice(buttonClick)(callback)
