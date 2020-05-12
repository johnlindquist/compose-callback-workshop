import "./styles.css";

let log = value => {
    console.log(value);
};

let button = document.getElementById("button");

let buttonClick = listener => {
    button.addEventListener("click", listener);
};

let getURL = url => async listener => {
    let response = await fetch(url);
    let data = await response.json();

    listener(data);
};

let switchTo = otherBroadcaster => broadcaster => listener => {
    broadcaster(value => {
        otherBroadcaster(listener);
    });
};

let getJohn = getURL("https://api.github.com/users/johnlindquist");

switchTo(getJohn)(buttonClick)(log);
