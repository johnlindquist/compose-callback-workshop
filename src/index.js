import "./styles.css";

let one = document.getElementById("one")
let two = document.getElementById("two")

let oneClick = listener => {
    one.addEventListener("click", listener)
}

let twoClick = listener => {
    two.addEventListener("click", listener)
}

let logValue = value => {
    console.log(value)
}

let both = (broadcaster1, broadcaster2) => listener => {
    broadcaster1(listener)
    broadcaster2(listener)
}

both(oneClick, twoClick)(logValue)
