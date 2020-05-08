let start = document.getElementById("start")

let startClick = listener => {
  start.addEventListener("click", listener)
}

let log = value => {
  console.log(value)
}

let interval = amount => listener => {
  setInterval(listener, amount)
}

let inc = () => {
  let value = 0
  return broadcaster => listener => {
    broadcaster(ignore => {
      listener(value++)
    })
  }
}

let incInterval = inc()(interval(1000))

let switchTo = toBroadcaster => broadcaster => listener => {
  broadcaster(ignore => {
    toBroadcaster(listener)
  })
}

switchTo(incInterval)(startClick)(log)

