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

inc()(interval(1000))(log)