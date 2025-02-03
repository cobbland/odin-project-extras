let answer = window.prompt('What is the "official" name of JavaScript?'); 

if (answer === "ECMAScript") {
    window.alert("Right!");
} else if (answer) {
    window.alert(`You don't know? "ECMAScript"!`)
} else {
    window.alert("You're not even going to try?");
}