let start = document.getElementById("start")
let pause = document.getElementById("pause")

let startClick = listener => {
  start.addEventListener("click", listener)

  return () => {
    start.removeEventListener("click", listener)
  }
}

let pauseClick = listener => {
  pause.addEventListener("click", listener)

  return () => {
    pause.removeEventListener("click", listener)
  }
}

let log = value => {
  console.log(value)
}

let interval = amount => listener => {
  let id = setInterval(listener, amount)

  return () => {
    clearInterval(id)
  }
}

let inc = () => {
  let value = 0
  return broadcaster => listener => {
    return broadcaster(ignore => {
      listener(value++)
    })
  }
}

let stopWhen = stopBroadcaster => broadcaster => listener => {
  let stop = broadcaster(listener)

  stopBroadcaster(value => {
    stop()
  })

  return stop
}

let incInterval = stopWhen(pauseClick)(inc()(interval(1000)))

let switchTo = toBroadcaster => broadcaster => listener => {
  return broadcaster(ignore => {
    toBroadcaster(listener)
  })
}

switchTo(incInterval)(startClick)(log)

