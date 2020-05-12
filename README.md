# Composing Callbacks Workshop

## Purpose
Write small, composable functions to improve code readability
and reusability in complex asynchronous scenarios.

## Goals
1. Indentify Broadcasters and Listeners
2. Decouple Broadcasters and Listeners to insert Operators
3. Understand how Operators relay values from Broadcasters to Listeners
4. Write your own Operators
5. Compose Operators as complexity grows
6. Stop Broadcasters when you're done with their values


## Visual Metaphors
[Visual Metaphor Slides](https://docs.google.com/presentation/d/1-ShMBAImLCv1Pkr7DJ7OPCUPlv9ZMnnEayl8NGrlg5Q/edit?usp=sharing)

## 1st Hour - Decoupling Broadcasters and Listeners 📻

### Coupled Broadcasters and Listeners 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/coupled-broadcasters-and-listeners) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/coupled-broadcasters-and-listeners/?module=/src/index.js) 


### Broadcasters 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/broadcasters) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/broadcasters/?module=/src/index.js) 


### Listeners 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/listeners) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/listeners/?module=/src/index.js) 


### Start 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/start) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/start/?module=/src/index.js) 


### Hello World 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/hello-world) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/hello-world/?module=/src/index.js) 

### 🏋️‍♀️ Exercise - Build Your Own Broadcaster
>> Find a DOM Api that we haven't discussed yet
>> and build a Broadcaster from it

### Twice 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/twice) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/twice/?module=/src/index.js) 


### Two Broadcasters 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/two-broadcasters) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/two-broadcasters/?module=/src/index.js) 


### Get Target Value 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/get-target-value) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/get-target-value/?module=/src/index.js) 


### Together 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/together) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/together/?module=/src/index.js)


### With Value From Second 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/with-value-from-second) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/with-value-from-second/?module=/src/index.js) 


### 🏋️‍♀️ Exercise - Switch From One Broadcaster to Another
>> Write an Operator that takes 2 Broadcasters
>> Have it switch from the first Broadcaster to the second
>> e.g., Click a button, Load JSON, log JSON

## 2nd Hour - Enhancing Broadcasters 👨‍🍳

### Configure Broadcasters 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/configure-broadcasters) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/configure-broadcasters/?module=/src/index.js) 


### Two Listeners 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/two-destinations) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/two-destinations/?module=/src/index.js) 

### Share 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/share) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/share/?module=/src/index.js) 

### Delay 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/delay) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/delay/?module=/src/index.js) 

### 🏋️‍♀️ Exercise - Debounce Fast Values
>> Write an operator that only allows values through
>> after 250ms of inaction
>> e.g., When the user is typing, don't send every keystroke,
>> but wait for them to pause until you send the value

### Compose 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/compose) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/compose/?module=/src/index.js) 

### Take Only 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/take-only) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/take-only/?module=/src/index.js) 

### Stop When

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/stop) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/stop/?module=/src/index.js) 

### 🏋️‍♀️ Exercise - Stop On Condition
>> Write an operator that stops a broadcast
>> based a on function that checks the current value
>> e.g., A number greater than 4 or text longer than 3 characters

### Concat 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/concat) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/concat/?module=/src/index.js) 

## 3rd Hour - Operators with State 📈

### Add 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/add) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/add/?module=/src/index.js) 


### Update with Function 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/update-with-function) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/update-with-function/?module=/src/index.js) 


### Scan 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/scan) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/scan/?module=/src/index.js) 

### 🏋️‍♀️ Exercise - Build an Easter Egg
>> Check to see if the user has entered a specific sequence of keystrokes
>> e.g., Up, Down, Left, Right
>> 
>> Note: Instead of "starting over" if a user makes a misake,
>> you'll want to .push the new value and .shift the oldest value on the array 
>> that keeps track of the values
>> so you're always checking against the past 4 values

## 4th Hour - Building Real Demos 🖥

### Start an Interval 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/start-an-interval) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/start-an-interval/?module=/src/index.js) 


### Pause Interval 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/pause-interval) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/pause-interval/?module=/src/index.js) 


### Typeahead

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/typeahead-first-pass) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/typeahead-first-pass/?module=/src/index.js)

## Exercises

### Exercise Animation 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/exercise-animation) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/exercise-animation/?module=/src/index.js) 

### Exercise switchTo 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/exercise-switch-to) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/exercise-switch-to/?module=/src/index.js) 

### Exercise Animate a Sequence of Boxes 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/exercise-animate-a-sequence-of-boxes) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/exercise-animate-a-sequence-of-boxes/?module=/src/index.js)

### Konami Code

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/exercise-konami) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/exercise-konami/?module=/src/index.js) 

## Other Examples

### Interval with Inc 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/interval-with-inc) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/interval-with-inc/?module=/src/index.js) 

### Count To 

[Go to branch](https://github.com/johnlindquist/compose-callback-workshop/tree/count-to) 

[Edit on Codesandbox](https://codesandbox.io/s/github/johnlindquist/compose-callback-workshop/tree/count-to/?module=/src/index.js) 

## 🤦‍♂️ Troubleshooting

### Async/Await
If you get a "regenerator runtime" error, make sure to add the following to your `package.json`:
```json
"browserslist": [
    "last 1 Chrome versions"
]
```

### Weird Reloading Issues
If you experience reloading issues on Codesandbox,
open their settings and enable "Hard Reload on Change".

This disables the "hot module reloading" which tries to
keep state between reloads.