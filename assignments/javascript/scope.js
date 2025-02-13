// const globalVar = "Howdy, I'm the global variable."

// function outer() {
//     const outerVar = "Hey, I'm the outer var!";
//     return function inner() {
//         const innerVar = "Hey, I'm the inner variable!";
//         console.log(innerVar);
//         console.log(outerVar);
//         console.log(globalVar);
//     }
// }

// const innerFun = outer();

// function createGreeting(greeting = "hi") {
//     const myGreet = greeting.toUpperCase();

//     return function(name) {
//         return `${myGreet}, ${name}!`;
//     };
// };

// const sayHi = createGreeting();
// const sayHello = createGreeting('hello');
// const sayHey = createGreeting('hey');
// const southernGreeting = createGreeting('howdy');

// console.log(sayHi('Bob'));
// console.log(southernGreeting('Jacob'));

// const logName = (name) => {
//     console.log(name);
// }

// function createGame(gameName) {
//     let score = 0;

//     return function win() {
//         score ++;
//         return `Your name ${gameName} score is ${score}.`
//     }
// }

// const hockeyGame = createGame('Hockey');
// const soccerGame = createGame('Soccer');

const Formatter = (function() {
    console.log("Start");
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const timesRun = [];

    const makeUppercase = (text) => {
        log("Making uppercase...");
        timesRun.push(null);
        return text.toUpperCase();
    };

    const writeToDOM = (selector, message) => {
        document.querySelector(selector).innerText = message;
    }

    return {
        makeUppercase,
        writeToDOM,
    };
})();

// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.timesRun.length);

Formatter.writeToDOM("#logo", "Hi there");