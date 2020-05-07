import "./styles.css";

let button = document.getElementById("button")
let input = document.getElementById("input")

let buttonClick = listener => {
  button.addEventListener("click", listener)
}

let inputInput = listener => {
  input.addEventListener("input", listener)
}

let interval = listener => {
  setInterval(listener, 1000)
}

let timeout = listener => {
  setTimeout(listener, 1000)
}

let promise = async listener => {
  let result = await new Promise(resolve => {
    setTimeout(() => {
      resolve("This was a promise")
    }, 1000)
  })

  listener(result)
}

let someValue = listener => {
  setTimeout(() => {
    listener({ name: "John" })
  }, 0)
}

let someIterable = listener => {
  setTimeout(() => {
    [1, 2, 3].forEach(listener)
  }, 0)
}