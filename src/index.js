import "./styles.css";

let output = document.getElementById("output");
let writeOutput = value => {
    output.innerHTML = value;
};

let number = document.getElementById("number");
let button = document.getElementById("button");

let interval = listener => {
    let id = setInterval(listener, 50);
    return () => {
        clearInterval(id);
    };
};

let buttonClick = listener => {
    button.addEventListener("click", listener);
};

let numberInput = listener => {
    number.addEventListener("input", listener);
};

let switchMap = fn => broadcaster => listener => {
    return broadcaster(value => {
        return fn(value)(listener);
    });
};

let withOtherValue = (firstBroadcaster, secondBroadcaster) => listener => {
    let secondValue;

    secondBroadcaster(value => (secondValue = value));

    return firstBroadcaster(firstValue => {
        listener(secondValue);
    });
};

let getTargetValue = broadcaster => listener => {
    return broadcaster(event => {
        listener(event.target.value);
    });
};

let compose = (...fns) =>
    fns.reduce((prev, next) => (...args) => prev(next(...args)));

let scan = (fn, initial) => broadcaster => listener => {
    let current = initial;

    return broadcaster(value => {
        current = fn(current, value);

        listener(current);
    });
};

let takeWhile = condition => broadcaster => listener => {
    let stop = broadcaster(value => {
        if (!condition(value)) stop();
        else listener(value);
    });

    return stop;
};

let countUpOnInterval = value =>
    compose(
        takeWhile(current => current <= value),
        scan(x => x + 1, 0)
    )(interval);

compose(
    switchMap(countUpOnInterval),
    getTargetValue
)(withOtherValue(buttonClick, numberInput))(writeOutput);
