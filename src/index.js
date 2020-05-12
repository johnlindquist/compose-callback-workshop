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

let someGenerator = listener => {
    let myGenerator = function* () {
        let i = 0

        while (i < 10) {
            yield i
            i++
        }
    }

    for (let value of myGenerator()) {
        listener(value)
    }
}

let someURL = async listener => {
    let response = await fetch("https://api.github.com/users/johnlindquist");
    let data = await response.json();

    listener(data);
};
