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

let add = initial => {
  let current = initial
  return broadcaster => listener => {
    broadcaster(value => {
      current += value
      listener(current)
    })
  }
}

let plusOne = mapTo(1)(plusClick)
let minusOne = mapTo(-1)(minusClick)

add(0)(both(plusOne, minusOne))(log)