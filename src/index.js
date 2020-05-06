import "./styles.css";

let one = document.getElementById("one")
let two = document.getElementById("two")

let oneClick = destination => {
  one.addEventListener("click", destination)
}

let twoClick = destination => {
  two.addEventListener("click", destination)
}

let logValue = value => {
  console.log(value)
}

let both = (source1, source2) => destination => {
  source1(destination)
  source2(destination)
}

both(oneClick, twoClick)(logValue)
