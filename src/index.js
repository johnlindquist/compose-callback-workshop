import "./styles.css";

let button = document.getElementById("button")



let buttonClick = destination => {
  button.addEventListener("click", destination)
}

buttonClick(() => {
  console.log("hello world")
})