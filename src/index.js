let log = value => {
  console.log(value)
}

// log("hello")

let alert = value => {
  window.alert(value)
}

//alert("hi")

let output = document.getElementById("output")
let showOutput = value => {
  output.innerHTML = `<div>${value}</div>`
}

// showOutput("John")

let list = document.getElementById("list")
let showList = value => {
  list.innerHTML = value.map(item => `<div>${item}</div>`).join("")
}

//showList([1, 2, 3])