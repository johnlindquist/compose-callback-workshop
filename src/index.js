let log = value => {
  console.log(value)
}

let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

let plusClick = listener => {
  plus.addEventListener("click", listener)
}

let minusClick = listener => {
  minus.addEventListener("click", listener)
}

let mapTo = value => broadcaster => listener => {
  broadcaster(ignoreMe => {
    listener(value)
  })
}

let both = (first, second) => listener => {
  first(listener)
  second(listener)
}

let scan = (accumulator, initial) => {
  let current = initial
  return broadcaster => listener => {
    broadcaster(value => {
      current = accumulator(current, value)
      listener(current)
    })
  }
}

let plusOne = mapTo(value => value + 1)(plusClick)
let minusOne = mapTo(value => value - 1)(minusClick)

scan((acc, value) => value(acc), 0)(both(plusOne, minusOne))(log)